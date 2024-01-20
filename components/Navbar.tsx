import { AvatarIcon } from "@radix-ui/react-icons";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import React from "react";
import { Database } from "@/types/supabase";
import ClientSideCredits from "./realtime/ClientSideCredits";
import Image from "next/image";

export const dynamic = "force-dynamic";

const stripeIsConfigured = process.env.NEXT_PUBLIC_STRIPE_IS_ENABLED === "true";

export const revalidate = 0;

export default async function Navbar() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: credits } = await supabase
    .from("credits")
    .select("*")
    .eq("user_id", user?.id ?? "")
    .single();

  return (
    <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between">
      <div className="flex gap-2 h-full">
        <Link href="/">
          <h2 className=" font-medium  text-2xl items-center  gap-2 flex">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="Picture of the author"
            />{" "}
            <span className="sm:block hidden"> Sesión de fotos</span>{" "}
          </h2>
        </Link>
      </div>
      {user && (
        <div className=" lg:flex flex-row gap-2">
          <Link href="/overview">
            <Button variant={"ghost"}>Inicio</Button>
          </Link>
          {stripeIsConfigured && (
            <Link href="/get-credits">
              <Button variant={"ghost"}>Obtener créditos</Button>
            </Link>
          )}
        </div>
      )}
      <div className="flex gap-4 lg:ml-auto scroll-smooth">
        {!user && (
          <Link scroll={true} href="/#Como funciona" className="scroll-smooth">
            <Button variant={"ghost"}>Como funciona?</Button>
          </Link>
        )}
        {!user && (
          <Link scroll={true} href="/#Precios" className="scroll-smooth">
            <Button variant={"ghost"}>Precios</Button>
          </Link>
        )}
        {!user && (
          <Link scroll={true} href="/#Faq" className="scroll-smooth">
            <Button variant={"ghost"}>Faq</Button>
          </Link>
        )}
        {!user && (
          <Link href="/login">
            <Button variant={"ghost"}>Iniciar sesion / Registrarse</Button>
          </Link>
        )}{" "}
        {user && (
          <div className="flex flex-row gap-4 text-center align-middle justify-center">
            {stripeIsConfigured && (
              <ClientSideCredits creditsRow={credits ? credits : null} />
            )}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <AvatarIcon height={24} width={24} className="text-sky-600" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="text-primary text-center overflow-hidden text-ellipsis">
                  {user.email}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <form action="/auth/sign-out" method="post">
                  <Button
                    type="submit"
                    className="w-full text-left"
                    variant={"ghost"}>
                    Cerrar sesión
                  </Button>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
}
