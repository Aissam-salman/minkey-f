"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";


const formSchema = z.object({
    firstname: z.string().min(2).max(30),
    lastname: z.string().min(2).max(30),
    email: z.string().email(),
    password: z.string().min(6).max(30),
})

export function SigninForm({
  className
                           }: React.ComponentPropsWithoutRef<"form">) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
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