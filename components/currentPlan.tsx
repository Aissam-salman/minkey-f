"use client"
import {userStore} from "@/stores/user-store";

export function CurrentPlan() {
    const {user} = userStore();

    return (
        <>
            {user.plan ?? "Aucun plan recup"}
        </>
    )
}