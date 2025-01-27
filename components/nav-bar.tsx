"use client"
import * as React from 'react';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {userStore} from "@/stores/user-store";
import {LogOutIcon, MenuIcon} from "lucide-react";
import {useIsMobile} from "@/hooks/use-mobile";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import LogoSVG from "@/components/logo-svg";

type Props = {};
export const NavBar = (props: Props) => {
    const router = useRouter();
    const {token, clearToken} = userStore();

    const logout = () => {
        clearToken();
        router.push("/");
    }

    const isMobile = useIsMobile();


    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
            <nav className="w-full mx-auto flex flex-wrap basis-full items-center justify-between">
                <a className=" flex-none text-xl font-semibold focus:outline-none focus:opacity-80"
                   href="/">
                    <LogoSVG width={'60'} height={'60'}/>
                </a>
                {isMobile ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger> <MenuIcon/></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {token ? (
                                <>
                                    <DropdownMenuLabel
                                        onClick={() => router.push("dashboard")}>Dashboard</DropdownMenuLabel>
                                    <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                                </>
                            ) : (
                                <>
                                    <DropdownMenuItem onClick={() => router.push("signin")}>S'insrire</DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => router.push("login")}>Connexion</DropdownMenuItem>
                                </>
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>

                ) : <div className=" sm:flex items-center gap-3">

                    {token ? (
                        <>
                            <Button onClick={() => router.push("dashboard")}>App</Button>
                            <Button variant={"outline"} onClick={logout}><LogOutIcon className={"w-6 h-6"}/></Button>
                        </>
                    ) : (
                        <>
                            <Button variant={"outline"} onClick={() => router.push("login")}>Connexion</Button>
                            <Button onClick={() => router.push("signin")}>S'inscrire</Button>
                        </>
                    )}
                </div>}

            </nav>
        </header>
    );
};