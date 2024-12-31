// @flow
import * as React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

type Props = {};
export const NavBar = (props: Props) => {
    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
            <nav className="w-full mx-auto flex flex-wrap basis-full items-center justify-between">
                <a className=" flex-none text-xl font-semibold focus:outline-none focus:opacity-80"
                   href="#">
                    <Image className={"w-10 h-auto "}
                           src={"/Logo-Minkey-App.svg"}
                           alt={"Minkey"}
                           width={60}

                           height={60}
                    />
                </a>
                <div className="hidden sm:flex items-center gap-3">
                    <Button variant={"outline"}>Connexion</Button>
                    <Button>S'inscrire</Button>
                </div>
            </nav>
        </header>
    );
};