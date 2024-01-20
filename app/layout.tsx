import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";

const CrispWithNoSSR = dynamic(() => import("../components/crisp"));

export const metadata = {
  title: "IA sesion de fotos",
  description: "Genera increíbles retratos en minutos usando IA",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <SpeedInsights />
      <CrispWithNoSSR />
      <body className="min-h-screen flex flex-col">
        <section>
          <Suspense
            fallback={
              <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
            }>
            <Navbar />
          </Suspense>
        </section>
        <main className="flex flex-1 flex-col items-center py-16">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
