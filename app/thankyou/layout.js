import React from "react";

function layout() {
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
    </div>
  );
}

export default layout;
