"use client"
import {NavBar} from "@/components/nav-bar";
import {Button} from "@/components/ui/button";
import {useUserStore} from "@/stores/use-user-store";
import userService from "@/service/user.service";


export default function PayPage() {

    const {token} = useUserStore();
    console.log("token: ", token);

    const handleStripe = async () => {
        try {
            const resp = await userService.getUser(token);

            const customerId = resp.data.stripeCustId ?? null;

            const response = await fetch("/api/stripe-session", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({customerId}),
            });

            if (!response.ok) {
                throw new Error("Failed to create Stripe session.");
            }

            const data = await response.json();

            if (data.url) {
                window.location.href = data.url; // Redirige l'utilisateur
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
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-lg mx-auto flex flex-col gap-8">
                    <Button onClick={handleStripe}>
                        Abonne-toi
                    </Button>
                </div>
            </div>
        </div>
    )

}


