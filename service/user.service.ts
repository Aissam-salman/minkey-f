import {LoginUser, RegisterUser} from "@/types/user";
import axiosInstance from "@/hooks/use-axios";

class UserService {
    async register(newUser: RegisterUser) {
        return axiosInstance.post("/auth/register", newUser)
    }

    async login(user: LoginUser) {
        return axiosInstance.post("/auth/login", user)
    }

    async getUser(token: string) {
        return axiosInstance.get(`/users/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    async uploadProfileImage() {
        return axiosInstance.post(`/users/upload`, {})
    }
}

export default new UserService();