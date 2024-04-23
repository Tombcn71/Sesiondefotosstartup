import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-08-16",
  typescript: true,
});

export default async function handler(req, res) {
  const { session_id } = req.query; // Extract session ID from query parameters

  if (!session_id) {
    return res.status(400).json({ error: "Missing session ID" }); // Handle missing session ID
  }

  try {
    // Retrieve Stripe session and customer details
    const session = await stripe.checkout.sessions.retrieve(session_id);
    const customer = await stripe.customers.retrieve(session.customer);

    // Render a dynamic HTML response using Next.js templating
    return res
      .status(200)
      .render("order-success", { customerName: customer.name });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ error: "An error occurred" }); // Handle errors gracefully
  }
}
