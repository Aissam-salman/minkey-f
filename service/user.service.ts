import {LoginUser, RegisterUser, UpdateUser} from "@/types/user";
import axiosInstance from "@/hooks/use-axios";

class UserService {
    async register(newUser: RegisterUser) {
        return axiosInstance.post("/auth/register", newUser)
    }

    async login(user: LoginUser) {
        return axiosInstance.post("/auth/login", user)
    }

    async getUser() {
        return axiosInstance.get(`/users/profile`);
    }

    async updateUser(userInfoUpdate: UpdateUser) {
        return axiosInstance.patch(`/users/update`, userInfoUpdate)
    }
}

export default new UserService();