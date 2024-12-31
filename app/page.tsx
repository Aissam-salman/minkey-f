import {RainbowButton} from "@/components/ui/rainbow-button";
import ShineBorder from "@/components/ui/shine-border";
import Safari from "@/components/ui/safari";
import BoxReveal from "@/components/ui/box-reveal";
import {NavBar} from "@/components/nav-bar";

export default function Home() {
    return (
        <div
            className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <NavBar/>
            <main className="mx-auto overflow-hidden">
                <section className="pb-16 ">
                    <h1 className="bg-gradient-to-br from-green-950 via-green-900 to-green-700
          text-transparent bg-clip-text font-medium py-6 text-5xl sm:text-6xl md:text-7xl
          lg:text-8xl
         "
                    >
                        Découvrez un espace unique pour apprendre, collaborer et explorer.
                    </h1>
                    <h2 className={"mb-12 text-lg text-gray-600 md:text-xl text-balance"}>
                        {/*faire list point*/}
                        Avec Minkey, accédez à des cours interactifs, connectez-vous à la
                        communauté et réservez des experts
                        en toute simplicité.
                    </h2>
                    <RainbowButton>Rejoindre Minkey</RainbowButton>
                    {/*    app image */}
                    <div className={"h-16"}></div>
                    <ShineBorder
                        borderWidth={2}
                        className="relative flex w-full flex-col items-center -p-2 justify-center overflow-hidden rounded-lg
                     bg-background md:shadow-xl"
                        color={["#245037", "#5a9974", "#ffffff"]}
                    >
                        <Safari url="minkey.fr" imageSrc={"home.png"} className="size-full"/>
                    </ShineBorder>
                </section>
                <section id="resolving" className={"py-20"}>
                    <article>
                        <BoxReveal boxColor={"#245037"} duration={0.5}>
                            <p className="text-xl font-semibold">
                                Trouver un réseau d'entrepreneurs solide
                            </p>
                        </BoxReveal>
                        <BoxReveal boxColor={"#245037"} duration={0.5}>
                            <h2 className="mt-[.5rem] text-[1rem]">
                                Les entrepreneurs ont du mal à se connecter avec d'autres professionnels {" "}
                                <span className="text-[#245037]">pertinents.</span>
                            </h2>
                        </BoxReveal>
                        <BoxReveal boxColor={"#245037"} duration={0.5}>
                            <div className="mt-6">
                                <p>
                                    -&gt;{" "}Minkey facilite la création d'un réseau d'
                                    <span className="font-semibold text-[#245037]"> entrepreneurs</span> et de
                                    <span className="font-semibold text-[#245037]"> prestataires</span>{" "}
                                    pour des collaborations fructueuses.
                                </p>
                            </div>
                        </BoxReveal>

                    </article>


                </section>

                <section id="pricing">
                    <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
                        <div className="mx-auto max-w-5xl text-center"><h4
                            className="text-xl font-bold tracking-tight text-black dark:text-white">Pricing</h4><h2
                            className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">Simple
                            pricing for everyone.</h2><p
                            className="mt-6 text-xl leading-8 text-black/80 dark:text-white">Choose an <strong>affordable
                            plan</strong> that's packed with the best features for engaging your audience, creating
                            customer loyalty, and driving sales.</p></div>
                        <div className="flex w-full items-center justify-center space-x-2">
                            <button type="button" role="switch" aria-checked="true" data-state="checked" value="on"
                                    className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                                    id="interval"><span data-state="checked"
                                                        className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"></span>
                            </button>
                            <span>Annual</span><span
                            className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">2 MONTHS FREE ✨</span>
                        </div>
                        <div
                            className="mx-auto grid w-full justify-center sm:grid-cols-2 lg:grid-cols-4 flex-col gap-4">
                            <div
                                className="relative flex max-w-[400px] flex-col gap-8 rounded-2xl border p-4 text-black dark:text-white overflow-hidden">
                                <div className="flex items-center">
                                    <div className="ml-4"><h2 className="text-base font-semibold leading-7">Basic</h2><p
                                        className="h-12 text-sm leading-5 text-black/70 dark:text-white">A basic plan
                                        for startups and individual users</p></div>
                                </div>
                                <div className="flex flex-row gap-1"><span
                                    className="text-4xl font-bold text-black dark:text-white">$100<span
                                    className="text-xs"> / year</span></span></div>
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2">
                                    <span
                                        className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black"></span>
                                    <p>Subscribe</p></button>
                                <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0"/>
                                <ul className="flex flex-col gap-2 font-normal">
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">AI-powered analytics</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Basic support</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">5 projects limit</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Access to basic AI tools</span></li>
                                </ul>
                            </div>
                            <div
                                className="relative flex max-w-[400px] flex-col gap-8 rounded-2xl p-4 text-black dark:text-white overflow-hidden border-2 border-[var(--color-one)] dark:border-[var(--color-one)]">
                                <div className="flex items-center">
                                    <div className="ml-4"><h2 className="text-base font-semibold leading-7">Premium</h2>
                                        <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">A premium
                                            plan for growing businesses</p></div>
                                </div>
                                <div className="flex flex-row gap-1"><span
                                    className="text-4xl font-bold text-black dark:text-white">$200<span
                                    className="text-xs"> / year</span></span></div>
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2">
                                    <span
                                        className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black"></span>
                                    <p>Subscribe</p></button>
                                <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0"/>
                                <ul className="flex flex-col gap-2 font-normal">
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Advanced AI insights</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Priority support</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Unlimited projects</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Access to all AI tools</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Custom integrations</span></li>
                                </ul>
                            </div>
                            <div
                                className="relative flex max-w-[400px] flex-col gap-8 rounded-2xl border p-4 text-black dark:text-white overflow-hidden">
                                <div className="flex items-center">
                                    <div className="ml-4"><h2
                                        className="text-base font-semibold leading-7">Enterprise</h2><p
                                        className="h-12 text-sm leading-5 text-black/70 dark:text-white">An enterprise
                                        plan with advanced features for large organizations</p></div>
                                </div>
                                <div className="flex flex-row gap-1"><span
                                    className="text-4xl font-bold text-black dark:text-white">$500<span
                                    className="text-xs"> / year</span></span></div>
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2">
                                    <span
                                        className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black"></span>
                                    <p>Subscribe</p></button>
                                <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0"/>
                                <ul className="flex flex-col gap-2 font-normal">
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Custom AI solutions</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">24/7 dedicated support</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Unlimited projects</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Access to all AI tools</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Custom integrations</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Data security and compliance</span></li>
                                </ul>
                            </div>
                            <div
                                className="relative flex max-w-[400px] flex-col gap-8 rounded-2xl border p-4 text-black dark:text-white overflow-hidden">
                                <div className="flex items-center">
                                    <div className="ml-4"><h2
                                        className="text-base font-semibold leading-7">Ultimate</h2><p
                                        className="h-12 text-sm leading-5 text-black/70 dark:text-white">The ultimate
                                        plan with all features for industry leaders</p></div>
                                </div>
                                <div className="flex flex-row gap-1"><span
                                    className="text-4xl font-bold text-black dark:text-white">$800<span
                                    className="text-xs"> / year</span></span></div>
                                <button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2">
                                    <span
                                        className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black"></span>
                                    <p>Subscribe</p></button>
                                <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0"/>
                                <ul className="flex flex-col gap-2 font-normal">
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Bespoke AI development</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">White-glove support</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Unlimited projects</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Priority access to new AI tools</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Custom integrations</span></li>
                                    <li className="flex items-center gap-3 text-xs font-medium text-black dark:text-white">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white">
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="flex">Highest data security and compliance</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
