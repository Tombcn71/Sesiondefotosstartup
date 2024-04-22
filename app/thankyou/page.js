import React from "react";

function page() {
  return (
    <div>
      <html>
        <script
          type="text/javascript"
          src="https://app.paypro.nl/pat/pat.js"
          data-campaign-id="24939"
          data-order-amount="AMOUNT_HERE" // Required when using variable commission
          data-reference="REFERENCE_HERE" // Optional, but can be useful for administration purposes, or avoid duplicate conversions
        ></script>
        <noscript>
          <img
            src="https://app.paypro.nl/pat/pat.gif?campaignId=24939&orderAmount=AMOUNT_HERE&reference=REFERENCE_HERE"
            height="0"
            style="display: none; visibility: hidden;"
            width="0"
          />
        </noscript>
      </html>
      <div className="bg-white p-6  md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="text-sky-600  w-16 h-16 mx-auto my-6">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Betaling geslaagd!
          </h3>
          <p className="text-gray-600 my-2">
            Bedankt voor het voltooien van je veilige online betaling.
          </p>
          <p> Vanuit je dashboard kun je jouw fotosessie starten! </p>
          <div className="py-10 text-center">
            <a
              href="/overview"
              className="px-12 bg-sky-600  hover:bg-sky-500  text-white font-semibold py-3">
              Naar dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
