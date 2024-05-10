import Posts from "@/components/Posts";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <div className="space-y-5 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl  text-gray-800 font-bold mx-auto sm:text-5xl">
          Professionele zakelijke portetfoto's{" "}
        </h1>
        <p className="max-w-l text-xl pt-5 pb-6 text-gray-500 mx-auto sm:text-m">
          Een goed gemaakte portretfoto kan deuren openen naar nieuwe kansen,
          jouw online aanwezigheid verbeteren en je helpen op te vallen in jouw
          werkveld, of je nu een bedrijfseigenaar bent, een werknemer of gewoon
          je professionele imago wilt verbeteren.
        </p>
        <div className="mb-12"></div>
      </div>

      <div className="mt-12">
        <Posts />
      </div>
    </main>
  );
}
