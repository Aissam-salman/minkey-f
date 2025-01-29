"use client"

import * as React from "react"

import {DropdownMenu, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,} from "@/components/ui/sidebar"
import LogoSVG from "@/components/logo-svg";
import {useRouter} from "next/navigation";

export function TeamSwitcher({
                                 teams,
                             }: {
    teams: {
        name: string,
        plan: string
    }[]
}) {
    const {isMobile} = useSidebar()
    const [activeTeam, setActiveTeam] = React.useState(teams[0])
    const router = useRouter();


    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            onClick={() => router.push("/dashboard")}
                        >
                            <div
                                className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <LogoSVG width={"20"} height={"20"}/>
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                 <span className="truncate font-semibold">
                                    {activeTeam.name}
                                </span>
                                <span className="truncate text-xs">{activeTeam.plan}</span>
                            </div>
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
