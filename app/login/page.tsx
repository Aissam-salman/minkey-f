import {LoginForm} from "@/components/login-form"
import LogoSVG from "@/components/logo-svg";

export default function LoginPage() {
    return (
        <div className="grid min-h-svh">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-lg mx-auto flex flex-col gap-8">
                        <div className={"flex flex-col items-center justify-center"}>
                            <LogoSVG width={"200"} height={"100"}/>
                        </div>
                        <LoginForm/>
                    </div>
                </div>
            </div>

        </div>
    )
}
