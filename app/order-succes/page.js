"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";
function OrderSuccess({ customerName }) {
  const router = useRouter(); // Get access to routing context

  return (
    <div className="order-success-page">
      <Head>
        <title>Order Success - Your Store Name</title>
      </Head>
      <h1>Thanks for your order, {customerName}!</h1>
      <p>
        Your order details can be found on your account page. You may also
        receive a confirmation email shortly.
      </p>
      <button onClick={() => router.push("/")}>Go to Home</button>
      <style jsx>{`
        .order-success-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
}

export default OrderSuccess;
