"use client"
import {NavBar} from "@/components/nav-bar";
import {z} from "zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription} from "@/components/ui/card";
import {useToast} from "@/hooks/use-toast";

const forgotSchema = z.object({
    email: z.string(),
})

const Page = () => {
    const form = useForm<z.infer<typeof forgotSchema>>({
        resolver: zodResolver(forgotSchema),
        defaultValues: {
            email: "",
        }
    });

    const onSubmit = (values: z.infer<typeof forgotSchema>) => {
        console.log(values);
        {/*TODO: handle forgot password */
        }
    }

    const {toast} = useToast();


    return (
        <div
            className="min-h-screen p-8 pb-20 gap-16 sm:px-20 font-[family-name:var(--font-geist-sans)]">
            <NavBar/>
            <main className="flex flex-col items-center pt-6">
                <h2 className="bg-gradient-to-br from-green-950 via-green-800 to-green-200
                                    text-transparent bg-clip-text font-medium py-6 text-3xl sm:text-4xl md:text-5xl
                            lg:text-6xl">Mot de passe oublié</h2>
                <p className="mb-10">Vérifions votre email avant de changer votre mot de passe</p>
                <Card className="p-6">
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className={"flex flex-col gap-3 mb-2"}>
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
                                            <   FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit">Vérifier</Button>
                            </form>
                        </Form>
                    </CardContent>
                    <CardDescription>
                        Un mail de vérification va vous etre envoyé
                    </CardDescription>
                </Card>
            </main>
        </div>
    )
}


export default Page;