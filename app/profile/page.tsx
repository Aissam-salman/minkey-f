"use client"

import {useEffect, useState} from "react"
import userService from "@/service/user.service";
import {AppSidebar} from "@/components/app-sidebar";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {ProfileForm} from "@/components/profil-form";
import {Separator} from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

interface Profile {
    firstname: string
    lastname: string
    email: string
    bio: string
    photoUrl: string
}

export default function ProfileEditPage() {
    const [profile, setProfile] = useState<Profile | null>(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await userService.getUser();
                if (!response.data) {
                    throw new Error("Failed to fetch profile")
                }
                console.log(response.data);

                setProfile(response.data)
            } catch (error) {
                console.error("Error fetching profile:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchProfile()
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!profile) {
        return <div>Error loading profile</div>
    }


    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <header
                    className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1"/>
                        <Separator orientation="vertical" className="mr-2 h-4"/>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="/dashboard">
                                        Accueil
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block"/>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="/profile">
                                        Profile
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="container mx-auto p-10">
                    <h1 className="text-2xl font-bold mb-5">Edit Profile</h1>

                    <ProfileForm profile={profile}/>
                </div>
            </SidebarInset>
        </SidebarProvider>

    )
}
