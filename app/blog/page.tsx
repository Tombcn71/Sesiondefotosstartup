import Posts from "@/components/Posts";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <div className="space-y-5 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl  text-gray-800 font-bold mx-auto sm:text-5xl">
          Retratos profesionales{" "}
        </h1>
        <p className="max-w-l text-xl pt-5 pb-6 text-gray-500 mx-auto sm:text-m">
          Impresiona a los reclutadores, impulsa tu marca. Obtén retratos
          profesionales y asequibles en minutos. Sin montajes incómodos, solo
          perfección pulida. ¡Elige www.sesiondefotos.ai para retratos
          profesionales y domina tu presencia online!
        </p>
        <div className="mb-12"></div>
      </div>

      <div className="mt-12">
        <Posts />
      </div>
    </main>
  );
}
