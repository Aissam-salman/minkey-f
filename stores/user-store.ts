import {create} from "zustand/index";
import {UserProfile} from "@/types/user";

interface UserState {
    user: UserProfile | null;
    setUser: (user: UserProfile) => void,
    isConnected: boolean,
    setIsConnected: (connected: boolean) => void,
}

export const userStore = create<UserState>(((set) => ({
    user: null,
    setUser: (user: UserProfile) => set((state) => ({user})),
    isConnected: false,
    setIsConnected: (connected: boolean) => set(() => ({isConnected: connected})),
})))
