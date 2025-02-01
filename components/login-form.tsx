"use client"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import {z} from "zod";
import {useToast} from "@/hooks/use-toast";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import userService from "@/service/user.service";
import {ToastAction} from "@/components/ui/toast";
import {useEffect} from "react";


const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(30),
})

export function LoginForm({
                              className,
                              ...props
                          }: React.ComponentPropsWithoutRef<"div">) {

    const {toast} = useToast()
    const router = useRouter()
    const token = localStorage.getItem("accessToken");


    useEffect(() => {
        if (token) {
            setTimeout(() => router.push("/dashboard"), 2000)
        }
    })

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
        console.log(values);

        try {
            const resp = await userService.login(values);

            if (resp.data.token) {
                localStorage.setItem("accessToken", resp.data.token);
                toast({
                    title: "Sucessfully login",
                })
                router.push("/dashboard")
            }

        } catch (error) {
            console.log(error)
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction onClick={() => router.refresh()} altText="Try again">Try again</ToastAction>,
            })
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Entrez votre email ci-dessous pour vous connecter à votre compte
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Mot de passe</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormDescription>
                                        </FormDescription>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <a
                                href="/forgotpassword"
                                className="ml-auto inline-block text-xs underline-offset-4 hover:underline mb-6"
                            >
                                Mot de passe oublié?
                            </a>
                            <Button type="submit" className="w-full">
                                Connexion
                            </Button>
                            <div className="mt-4 text-center text-sm">
                                Pas de encore de compte ?{" "}
                                <a href="/signin" className="underline underline-offset-4">
                                    S'inscrire
                                </a>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
