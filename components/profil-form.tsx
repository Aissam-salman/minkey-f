"use client"

import {useState} from "react"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {useToast} from "@/hooks/use-toast";

const profileSchema = z.object({
    username: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    avatar: z.string(),
})

type ProfileFormValues = z.infer<typeof profileSchema>

interface ProfileFormProps {
    profile: ProfileFormValues
}

export function ProfileForm({profile}: ProfileFormProps) {
    const {toast} = useToast()
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: profile,
    })

    async function onSubmit(data: ProfileFormValues) {
        setIsLoading(true)
        try {
            const response = await fetch("http://your-spring-boot-api/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error("Failed to update profile")
            }

            toast({
                title: "Profile updated",
                description: "Your profile has been successfully updated.",
            })
        } catch (error) {
            console.error("Error updating profile:", error)
            toast({
                title: "Error",
                description: "There was a problem updating your profile.",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormDescription>This is the name that will be displayed on your profile.</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormDescription>This email will be used for account-related
                                notifications.</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Updating..." : "Update profile"}
                </Button>
            </form>
        </Form>
    )
}

