import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import { CookieConsent } from "@/components/CookieConsent";
import MobileNav from "@/components/MobileNav";

const CrispWithNoSSR = dynamic(() => import("../components/crisp"));

export const metadata = {
  title:
    "Professionele AI-headshots en zakelijke portretfoto's vanaf 29€ - Fotosessie.ai ",
  description:
    "Maak binnen enkele minuten professionele AI-headshots en zakelijke portretfoto's met onze AI-fotosessie generator. Wij transformeren jouw selfies in realistische AI-portretfoto's. Bespaar tijd en geld.",
};
export const revalidate = 0;

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      {" "}
      <SpeedInsights />
      <CrispWithNoSSR />
      <body className="min-h-screen flex flex-col">
        <section>
          <Suspense
            fallback={
              <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
            }>
            <Navbar />
            <MobileNav />
          </Suspense>
        </section>
        <main className="flex flex-1 flex-col items-center py-16">
          {children}
        </main>
        <Footer />
        <Toaster /> <CookieConsent />
      </body>
    </html>
  );
}
