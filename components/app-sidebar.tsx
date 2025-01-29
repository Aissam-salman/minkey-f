"use client"

import * as React from "react"
import {useEffect} from "react"
import {BookOpen, Bot, Frame, Map, PieChart, Settings2, SquareTerminal,} from "lucide-react"

import {NavMain} from "@/components/nav-main"
import {NavProjects} from "@/components/nav-projects"
import {NavUser} from "@/components/nav-user"
import {TeamSwitcher} from "@/components/team-switcher"
import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail,} from "@/components/ui/sidebar"
import userService from "@/service/user.service";
import {userStore} from "@/stores/user-store";
// TODO: fetch user info with avatar
// TODO: define how to organise sidebar


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
            title: "Playground",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
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
            title: "Models",
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
        {
            title: "Documentation",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
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

    const {token} = userStore();


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const resp = await userService.getUser(token);
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
