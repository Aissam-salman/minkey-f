import {stripe} from "@/lib/stripe";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const {customerId} = req.body;

            const session = await stripe.checkout.sessions.create({
                customer: customerId,
                mode: "subscription",
                payment_method_types: ["card", "link"],
                line_items: [
                    {
                        price: "price_1Qgr65IcY2LL5iPDfzS4Z8Fh",
                        quantity: 1,
                    },
                ],
                success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
                cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
            });

            res.status(200).json({url: session.url});
        } catch (err: any) {
            console.error("Stripe session failed with error: ", err);
            res.status(500).json({error: err.message});
        }
    } else {
        const headers = new Headers({"Allow": "POST"});
        res.setHeaders(headers);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}