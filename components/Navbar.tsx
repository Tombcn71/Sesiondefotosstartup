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
    <div className="">
      <div className=" flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between ">
        <div className="flex gap-2 h-full ">
          <Link href="/">
            <h2 className=" font-medium  text-2xl items-center   flex">
              <Image src="/seslogo.png" width={30} height={30} alt="Logo" />{" "}
              <span className="mt-1 ml-1 sm:block hidden">
                {" "}
                <Image
                  src="/textlogo.png"
                  width={180}
                  height={60}
                  alt="Logo text"
                />
              </span>{" "}
            </h2>
          </Link>
        </div>
        <div></div>
        {user && (
          <div className=" lg:flex flex-row gap-2 ">
            <Link href="/overview">
              <Button variant={"ghost"}>Home</Button>
            </Link>
            {stripeIsConfigured && (
              <Link href="/get-credits">
                <Button variant={"ghost"}>Credits kopen</Button>
              </Link>
            )}
          </div>
        )}
        <div className="flex gap-4 lg:ml-auto scroll-smooth">
          {!user && (
            <Link scroll={true} href="/#Zo werkt het" className="scroll-smooth">
              <Button variant={"ghost"}>Zo werkt het</Button>
            </Link>
          )}
          {!user && (
            <Link scroll={true} href="/#Prijs" className="scroll-smooth">
              <Button variant={"ghost"}>Prijs</Button>
            </Link>
          )}
          {!user && (
            <Link scroll={true} href="/#Faq" className="scroll-smooth">
              <Button variant={"ghost"}>Faq</Button>
            </Link>
          )}
          {!user && (
            <Link href="/login">
              <Button variant={"ghost"}>Inloggen / Registreren</Button>
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
                      Uitloggen
                    </Button>
                  </form>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
