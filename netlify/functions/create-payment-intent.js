import { config } from "dotenv";
import process from "process";
import stripe from "stripe";

config();

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

export async function handler(event) {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    return {
      statusCode: 200,
      body: JSON.stringify(paymentIntent),
    };
  } catch (error) {
    console.log({ error });

    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
}
