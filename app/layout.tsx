import Footer3 from "@/components/Footer3";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const CrispWithNoSSR = dynamic(() => import("../components/crisp"));

export const metadata = {
  title: "Professionele fotosessie met behulp van AI - Fotosessie.ai ",
  description:
    "Vergeet dure studio's en ongemakkelijke fotosessies. Makkelijk vanaf thuis of je werk. Bespaar tijd en geld.",
};
export const revalidate = 0;

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      {" "}
      <Script
        type="text/javascript"
        src="https://app.paypro.nl/pat/pat.js"
        data-campaign-id="24952"
        data-order-amount="AMOUNT_HERE" // Required when using variable commission
        data-reference="REFERENCE_HERE" // Optional, but can be useful for administration purposes, or avoid duplicate conversions
      ></Script>
      <GoogleAnalytics gaId="G-HRZWXLJH94" />
      <SpeedInsights />
      <CrispWithNoSSR />
      <meta
        name="google-site-verification"
        content="jh1jAMCQMI42YJZ40R0idHdqX4UkWEzrV3k5dM-ZGAU"
      />
      <body className="min-h-screen flex flex-col">
        <section>
          <Suspense
            fallback={
              <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
            }>
            {" "}
            <Navbar />
          </Suspense>
        </section>
        <main className="flex flex-1 flex-col items-center py-16">
          {children}
        </main>
        <Footer3 />
        <Toaster /> <CookieConsent />
      </body>
    </html>
  );
}
