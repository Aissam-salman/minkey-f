"use client"

import * as React from "react"
import {useEffect} from "react"
import {Bot, Frame, SquareM,} from "lucide-react"

import {NavMain} from "@/components/nav-main"
import {NavProjects} from "@/components/nav-projects"
import {NavUser} from "@/components/nav-user"
import {TeamSwitcher} from "@/components/team-switcher"
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail,} from "@/components/ui/sidebar"
import userService from "@/service/user.service";
import {useRouter} from "next/navigation";

// This is sample data.
const data = {

    teams: [
        {
            name: "Minkey",
            plan: "La jungle",
        },

    ],
    navMain: [
        {
            title: "Minkey Gang 🐒",
            url: "#",
            icon: SquareM,
            isActive: true,
            items: [
                //TODO: get list of group with title & email
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
        {
            title: "Minkeyline",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        {
            name: "Minkeydvisor",
            url: "#",
            icon: Frame,
        },
    ],
}

export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {

    const [user, setUser] = React.useState({
            name: "unknown",
            email: "unknown@example.com",
            avatar: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Brian"
        }
    );

    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const resp = await userService.getUser();
                const _user = resp.data;

                setUser({
                    name: _user.username,
                    email: _user.email,
                    avatar: _user.photoUrl ?? "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Brian",
                });
            } catch (err) {
                console.error(err);
                setUser({
                    name: "unknown",
                    email: "unknown@example.com",
                    avatar: "https://api.dicebear.com/9.x/fun-emoji/svg?seed=Brian",
                });
            }
        };

        fetchUser();
    }, []);


    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams}/>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
                <NavProjects projects={data.projects}/>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
