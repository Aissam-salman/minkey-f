"use client"

import {useState} from "react"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {useToast} from "@/hooks/use-toast";
import userService from "@/service/user.service";
import {Textarea} from "@/components/ui/textarea";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {EditIcon} from "lucide-react";
import {BUCKET_ID_PROFILE_IMG, storage} from "@/lib/appwrite";
import {ID} from "appwrite";

const profileSchema = z.object({
    firstname: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    bio: z.string().min(10, {
        message: "Bio must be at least 10 characters.",
    }),
    photoUrl: z.string().url()
})

type ProfileFormValues = z.infer<typeof profileSchema>

interface ProfileFormProps {
    profile: ProfileFormValues
}

export function ProfileForm({profile}: ProfileFormProps) {
    const {toast} = useToast()
    const [isLoading, setIsLoading] = useState(false)

    const [profileImage, setProfileImage] = useState<string>(profile.photoUrl ?? "https://github.com/shadcn.png");

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            ...profile,
            bio: profile.bio ?? "",
        },
    })

    async function onSubmit(data: ProfileFormValues) {
        setIsLoading(true)
        console.log(data)
        try {
            const response = await userService.updateUser(data);

            toast({
                title: "Profile updated",
                description: response.data.message,
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


    // Fonction pour gérer le téléversement de l'image
    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            const response = await storage.createFile(
                BUCKET_ID_PROFILE_IMG,
                ID.unique(),
                file
            );

            const imageUrl = storage.getFilePreview(BUCKET_ID_PROFILE_IMG, response.$id);
            setProfileImage(imageUrl);
            form.setValue("photoUrl", imageUrl);
        } catch (error) {
            console.error("Erreur lors du téléversement de l'image :", error);
        }
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="py-10 relative group">
                    {/* Zone de l'avatar avec effet hover */}
                    <div
                        className="relative w-20 h-20 rounded-full overflow-hidden cursor-pointer"
                        onClick={() => document.getElementById("fileInput")?.click()}
                    >
                        <Avatar className="w-full h-full">
                            <AvatarImage src={profileImage}/>
                            <AvatarFallback>{profile.firstname[0].toUpperCase() + profile.lastname[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div
                            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-white text-sm font-medium"><EditIcon/></span>
                        </div>
                    </div>

                    {/* Input file caché pour le téléversement */}
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="firstname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Prenom</FormLabel>
                            <FormControl>
                                <Input placeholder="Ton prenom" {...field} />
                            </FormControl>
                            <FormDescription>This is the name that will be displayed on your profile.</FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                /> <FormField
                control={form.control}
                name="lastname"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                            <Input placeholder="Ton nom" {...field} />
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
                <FormField
                    control={form.control}
                    name="bio"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Bio</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Description" {...field} value={field.value ?? ""}/>
                            </FormControl>
                            <FormDescription>Descris-toi en quelques mots</FormDescription>
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

