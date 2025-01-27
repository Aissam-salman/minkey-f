"use client"
import {NavBar} from "@/components/nav-bar";

import {RainbowButton} from "@/components/ui/rainbow-button";
import {useRouter} from "next/navigation";


export default function CancelPage() {
    const router = useRouter();

    return (
        <div className="flex flex-col p-6 gap-8">
            <NavBar/>
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-lg mx-auto flex flex-col gap-8">
                    <div className="text-center">
                        <h1 className="text-red-800 mb-4">
                            Paiement echoue!
                        </h1>
                        <p className="text-lg text-gray-700 mb-6">
                            Reessayer ulterieurement ou acceder directement a l'app.
                        </p>
                        <div className={"flex flex-row items-center justify-center gap-5"}>
                            <RainbowButton onClick={() => router.push("/pay")}>
                                Reessayer
                            </RainbowButton>
                            <RainbowButton onClick={() => router.push("/dashboard")}>
                                Go to Dashboard
                            </RainbowButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


