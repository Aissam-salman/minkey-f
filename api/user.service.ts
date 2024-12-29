import useAxios from "@/hooks/use-axios";

type RegisterUser = {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
}
class UserService {
    async register(newUser: RegisterUser){
        return useAxios.post("/auth/register", newUser)
    }
}

export default new UserService();