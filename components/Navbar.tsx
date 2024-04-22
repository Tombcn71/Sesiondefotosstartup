import { AvatarIcon, Pencil1Icon } from "@radix-ui/react-icons";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import {
  MenuIcon,
  CreditCard,
  ShieldQuestion,
  RssIcon,
  MailIcon,
} from "lucide-react";
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
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
    <div className=" flex w-full px-4 lg:px-40 py-4  border-b text-center gap-8 justify-between ">
      <div className="flex gap-2 h-full ">
        <Link href="/">
          <h2 className=" font-medium  text-2xl items-center   flex">
            <Image src="/seslogo.png" width={30} height={30} alt="Logo" />{" "}
            <span className="mt-1 ml-1 ">
              {" "}
              <Image
                src="/textlogo.png"
                width={130}
                height={50}
                alt="Logo text"
              />
            </span>{" "}
          </h2>
        </Link>
      </div>
      <div className="md:block hidden lg:block hidden lg:ml-auto align-items: flex-end; flex justify-end">
        <Link href="/#Prijs">
          <Button variant={"ghost"}>Prijs</Button>
        </Link>

        <Link href="/#Faq">
          <Button variant={"ghost"}>Faq</Button>
        </Link>
        <Link href="/blog">
          <Button variant={"ghost"}>Blog</Button>
        </Link>
        <Link href="/contact">
          <Button variant={"ghost"}>Contact</Button>
        </Link>
      </div>
      {user && (
        <div className=" lg:flex flex-row gap-2 ">
          {stripeIsConfigured && (
            <Link href="/get-credits">
              <Button variant={"ghost"}>Credits kopen</Button>
            </Link>
          )}
        </div>
      )}
      <div className=" flex gap-4 lg:ml-auto scroll-smooth">
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
        )}{" "}
        <Sheet>
          <div className="bg-white md:hidden ">
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <div className="bg-white">
              <SheetContent className="w-[220px] h-[300px] p-1 sm:w-[240px]">
                {" "}
                <div className="overflow-anchor: none;">
                  <SheetClose>
                    <ul>
                      <li className="flex flex-col pt-4  space-y-8  ">
                        <Link href="/prijs">
                          <Button variant={"ghost"} className="text-xl	">
                            <CreditCard className="m-4" /> Prijs
                          </Button>
                        </Link>
                        <Link href="/faq">
                          <Button variant={"ghost"} className="text-xl	">
                            <ShieldQuestion className="m-4" /> Faq
                          </Button>
                        </Link>
                        <Link href="/blog">
                          <Button variant={"ghost"} className="text-xl	">
                            <RssIcon className="m-4 text-sky-blue-600" /> Blog
                          </Button>
                        </Link>{" "}
                        <Link href="/contact">
                          <Button variant={"ghost"} className="text-xl	">
                            <MailIcon className="m-4 ml-10 " />
                            Contact
                          </Button>
                        </Link>
                      </li>
                    </ul>
                  </SheetClose>
                </div>{" "}
              </SheetContent>
            </div>
          </div>
        </Sheet>
      </div>
    </div>
  );
}
