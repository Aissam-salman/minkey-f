import userService from "@/service/user.service";
import {UserProfile} from "@/types/user";

export const fetchUser = async (user: UserProfile, setUser: (user: UserProfile) => void) => {
    if (!user || !user.email) {
        try {
            const resp = await userService.getUser();

            if (resp.data) {
                const {id, ...userData} = resp.data;
                setUser(userData);
            }
        } catch (error) {
            console.error("Erreur lors de la récupération de l'utilisateur :", error);
        }
    }
}
