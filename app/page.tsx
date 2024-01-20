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
    <div className="flex flex-col items-center pt-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 p-8 max-w-6xl w-full">
        <div className="flex flex-col space-y-4 lg:w-1/2 w-full">
          <h1 className="text-5xl font-bold">
            Sesión de fotos profesionales con IA en minutos.{" "}
          </h1>
          <p className="text-gray-600 text-lg">
            Eleva tu presencia en línea con fotografías en alta definición
            generadas por nuestra IA. Ideal para perfiles sociales, currículums
            y portafolios profesionales.
          </p>
          <div className="flex flex-col space-y-2">
            <Link href="/login">
              <Button className="rounded-full bg-sky-600 hover:bg-sky-700 w-full lg:w-1/2">
                Consigue tus fotos{" "}
              </Button>
            </Link>
            <p className="text-sm text-gray-500 italic">
              Con la confianza de profesionales de todo el mundo. Rápido y
              eficiente.{" "}
            </p>
          </div>
          <div className="mt-4 text-gray-500">
            <span>¿Ya eres usuario? </span>
            <Link className="text-blue-600 hover:underline" href="/login">
              Iniciar sesión{" "}
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
