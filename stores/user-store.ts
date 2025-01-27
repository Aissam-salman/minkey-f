import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

interface UserState {
    token: string,
    setToken: (newToken: string) => void,
    clearToken: () => void,
}

export const userStore = create<
    UserState,
    [
        ['zustand/persist', UserState],
    ]
>(
    persist(
        (set, get) => ({
            token: "",
            setToken: (token: string) => set({token}),
            clearToken: () => set({token: ""}),
        }),
        {
            name: "token",
            storage: createJSONStorage(() => localStorage),
        },
    ))