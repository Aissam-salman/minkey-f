"use client"
import {RainbowButton} from "@/components/ui/rainbow-button";
import ShineBorder from "@/components/ui/shine-border";
import Safari from "@/components/ui/safari";
import {NavBar} from "@/components/nav-bar";
import {BentoSolved} from "@/components/BentoSolved";
import {useRouter} from "next/navigation";
import {Testemonial} from "@/components/testemonial";
import Footer from "@/components/footer";
import Pricing from "@/components/pricing";

export default function Home() {
    const router = useRouter();


    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
            <NavBar/>
            <main className="mx-auto overflow-hidden">
                <section className="flex flex-col items-center justify-center pb-16">
                    <h1 className="bg-gradient-to-br from-green-950 via-green-800 to-green-200
                                    text-transparent bg-clip-text font-medium py-6 text-3xl sm:text-4xl md:text-5xl
                            lg:text-6xl"
                    >
                        Découvrez un <span className={"font-bold"}>espace unique</span>
                        <br/>pour apprendre, collaborer et explorer.
                    </h1>
                    <h2 className={"mb-12 text-lg text-gray-600 md:text-xl text-balance"}>
                        {/*faire list point*/}
                        Avec Minkey, accédez à des cours interactifs, connectez-vous à la
                        communauté et réservez des experts
                        en toute simplicité.
                    </h2>
                    <RainbowButton onClick={() => router.push("/signin")}>Rejoindre Minkey</RainbowButton>
                    {/*    app image */}
                    <div className={"h-16"}></div>
                    <ShineBorder
                        borderWidth={2}
                        className="relative flex w-[70%] flex-col items-center justify-center overflow-hidden rounded-lg
                     bg-background md:shadow-xl"
                        color={["#245037", "#5a9974", "#000"]}
                    >
                        <Safari url="minkey.fr" imageSrc={"home.png"} className="size-full"/>
                    </ShineBorder>
                </section>
                <section id="resolving" className={"py-20"}>
                    <BentoSolved/>
                </section>
                <Pricing/>
                <section id="testemonial">
                    <Testemonial/>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
