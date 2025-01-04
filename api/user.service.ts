import useAxios from "@/hooks/use-axios";

type RegisterUser = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
}

type LoginUser = {
    email: string,
    password: string,
}

class UserService {
    async register(newUser: RegisterUser) {
        return useAxios.post("/auth/register", newUser)
    }

    async login(user: LoginUser) {
        return useAxios.post("/auth/login", user)
    }
}

export default new UserService();