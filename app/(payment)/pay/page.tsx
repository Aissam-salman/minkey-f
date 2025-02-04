"use client"
import {NavBar} from "@/components/nav-bar";
import {Button} from "@/components/ui/button";
import userService from "@/service/user.service";
import {planStore} from "@/stores/plan-store";
import {useRouter} from "next/navigation";
import PricingChoice from "@/components/pricing-choice";


export default function PayPage() {

    const {planChoice} = planStore();

    const router = useRouter();


    const handleStripe = async () => {
        try {
            const resp = await userService.getUser();

            const customerId = resp.data.stripeCustId ?? null;
            if (planChoice == 1) {
                router.push("/dashboard");
                return;
            }


            const response = await fetch("/api/stripe-session", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({customerId, planNumber: planChoice}),
            });

            if (!response.ok) {
                throw new Error("Failed to create Stripe session.");
            }

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url;
            } else {
                throw new Error("Stripe session URL not found.");
            }
        } catch (error) {
            console.error("Error handling Stripe session:", error);
        }
    }

    return (
        <div className="flex flex-col p-6 gap-8">
            <NavBar/>
            <div className="flex flex-col flex-1 items-center justify-center">
                <PricingChoice/>
                <div className="w-full max-w-lg mx-auto flex flex-col gap-8">
                    <Button onClick={handleStripe}>
                        Abonne-toi
                    </Button>
                </div>
            </div>
        </div>
    )

}


