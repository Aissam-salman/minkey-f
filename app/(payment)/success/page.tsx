"use client"
import {NavBar} from "@/components/nav-bar";
import {RainbowButton} from "@/components/ui/rainbow-button";
import {useRouter} from "next/navigation";


export default function SuccessPage() {

    const router = useRouter();

    return (
        <div className="flex flex-col p-6 gap-8">
            <NavBar/>
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-lg mx-auto flex flex-col gap-8">
                    <div className="text-center">
                        <h1 className="text-green-800 mb-4">
                            Paiement reussi!
                        </h1>
                        <p className="text-lg text-gray-700 mb-6">
                            Nous vous remercions de votre achat. Votre abonnement est maintenant actif.
                        </p>
                        <RainbowButton onClick={() => router.push("/dashboard")}>
                            Go to Dashboard
                        </RainbowButton>
                    </div>
                </div>
            </div>
        </div>
    )

}


