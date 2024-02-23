import Link from "next/link";
import { Button } from "@/components/ui/button";
import after from "/public/after.jpg";
import voorbeeld from "/public/voorbeeld.png";

export default () => {
  return (
    <section className="py-14 ">
      <div className="max-w-screen-xl border shadow-xl mx-auto md:px-8">
        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <img
              src={after.src}
              className="md:max-w-lg mb-2  sm:rounded-lg"
              alt=""
            />
          </div>
          <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
            <h3 className="text-sky-600 font-semibold">
              Retratos profesionales desde 29€{" "}
            </h3>
            <p className="text-gray-800 text-3xl font-bold sm:text-4xl">
              ¿Necesitas tus retratos profesionales hoy?{" "}
            </p>
            <p className="mt-3 text-gray-600">
              La fotografía de retratos profesional es importante, pero no tiene
              por qué ser costosa ni consumir mucho tiempo. Fácilmente desde
              casa, en menos de una hora de espera. Genera retratos
              profesionales en minutos que capturan tu personalidad y te hacen
              destacar.
            </p>
            <Link href="/login">
              <Button className="rounded text-white mt-4 bg-sky-600 hover:bg-sky-700 w-full lg:w-1/2">
                Consigue tus fotos{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
