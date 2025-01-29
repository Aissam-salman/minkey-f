import useAxios from "@/hooks/use-axios";
import {LoginUser, RegisterUser} from "@/types/user";

class UserService {
    async register(newUser: RegisterUser) {
        return useAxios.post("/auth/register", newUser)
    }

    async login(user: LoginUser) {
        return useAxios.post("/auth/login", user)
    }

    async getUser(token: string) {
        return useAxios.get(`/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    async uploadProfileImage() {
        return useAxios.post(`/users/upload`, {})
    }
}

export default new UserService();