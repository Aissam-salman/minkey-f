import {stripe} from "@/lib/stripe";
import {NextApiRequest, NextApiResponse} from "next";

const plan = {
    ultimate: "price_1Qgr65IcY2LL5iPDfzS4Z8Fh",
    ultimateYear: "price_1Qgr4HIcY2LL5iPDz9W2IGuT",
    premium: "price_1Qgr3KIcY2LL5iPDtFTQA1l7",
    premiumYear: "price_1Qgr1qIcY2LL5iPDmHPNRKyf",
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const {customerId, planNumber} = req.body;

            let planPrice;
            let isSubscribe = false;

            switch (planNumber) {
                case 2:
                    planPrice = plan.premium;
                    isSubscribe = true;
                    break;
                case 3:
                    planPrice = plan.premiumYear;
                    break;
                case 4:
                    planPrice = plan.ultimate;
                    isSubscribe = true;
                    break;
                case 5:
                    planPrice = plan.ultimateYear;
                    break;
                default:
                    console.error("Unknown planNumber", planNumber);
                    res.status(400).send({error: "Invalid planNumber"});
                    break;
            }


            const session = await stripe.checkout.sessions.create({
                customer: customerId,
                mode: isSubscribe ? "subscription" : "payment",
                payment_method_types: ["card", "link"],
                line_items: [
                    {
                        price: planPrice ?? "price_1Qgr65IcY2LL5iPDfzS4Z8Fh",
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