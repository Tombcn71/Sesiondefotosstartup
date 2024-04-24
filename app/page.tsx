import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import Faq from "@/components/Faq";
import hero2 from "/public/hero2.png";
import { Button } from "@/components/ui/button";
import ExplainerSection from "@/components/ExplainerSection";
import PricingSection from "@/components/PricingSection";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/overview");
  }

  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
        <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
          <h1 className="text-5xl font-bold ">
            <br /> Professionele fotosessie met behulp van AI✨
          </h1>
          <p className="text-gray-600 text-xl">
            Vergeet dure studio's en ongemakkelijke fotosessies! <br />
            Genereer binnen enkele minuten professionele zakelijke portetfoto's
            in HD studio kwaliteit die veel goedkoper zijn en geen tijd en
            reizen in beslag nemen, makkelijk vanaf thuis of je werk.
          </p>
          <div className="flex flex-col space-y-2">
            <Link href="/login">
              <Button className="rounded text-white bg-sky-600 hover:bg-sky-700 w-full lg:w-1/2">
                Begin met jouw fotosessie{" "}
              </Button>
            </Link>
          </div>
          <div className="mt-4 text-gray-500">
            <span>Ben je al een gebruiker? </span>
            <Link className="text-blue-600 hover:underline" href="/login">
              Inloggen{" "}
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
          <img
            src={hero2.src}
            alt="AI Headshot Illustration"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
      <ExplainerSection />
      <PricingSection /> <Faq />
    </div>
  );
}
