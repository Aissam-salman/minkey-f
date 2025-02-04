"use client"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import userService from "@/service/user.service";
import {useToast} from "@/hooks/use-toast";
import {ToastAction} from "@/components/ui/toast";
import {useRouter} from "next/navigation";
import {stripe} from "@/lib/stripe";
import {userStore} from "@/stores/user-store";


const UserSchema = z.object({
    firstname: z.string().min(2).max(30),
    lastname: z.string().min(2).max(30),
    email: z.string().email(),
    password: z.string().min(6).max(30),
    stripeCustomerId: z.string(),
})

export function SigninForm({
                               className
                           }: React.ComponentPropsWithoutRef<"form">) {
    const {toast} = useToast()
    const router = useRouter()
    const {setIsConnected, setUser} = userStore();


    const form = useForm<z.infer<typeof UserSchema>>({
        resolver: zodResolver(UserSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            stripeCustomerId: "",
        },
    })

    async function onSubmit(values: z.infer<typeof UserSchema>) {
        const stripeCustomer = await stripe.customers.create({
            email: values.email,
            name: values.firstname,
        })

        values["stripeCustomerId"] = stripeCustomer.id;

        try {
            const resp = await userService.register(values);

            if (resp.data.token) {

                setIsConnected(true);

                const _user = await userService.getUser();

                if (_user.data) {
                    setUser(_user.data);
                }

                toast({
                    title: "Sucessfully registered",
                })

                router.push("/pay")
            }

        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction onClick={() => router.refresh()} altText="Try again">Try again</ToastAction>,
            })
        }
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-3 mb-2", className)}>
                <div className="flex flex-col items-center gap-2 text-center">
                    <h1 className="text-2xl font-bold">Sign up to your account</h1>
                    <p className="text-balance text-sm text-muted-foreground">
                        Enter your email below to sign up
                    </p>
                </div>
                <FormField
                    control={form.control}
                    name="firstname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Firstname</FormLabel>
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
                    name="lastname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Lastname</FormLabel>
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
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your professional email
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
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                min 6 characters
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="/login" className="underline underline-offset-4">
                    Login
                </a>
            </div>
        </Form>

    )
}
