import {Stripe} from "stripe";

const apiKey = process.env.NEXT_PUBLIC_STRIPE_KEY ?? "";

export const stripe = new Stripe(apiKey, {
    typescript: true,
});

