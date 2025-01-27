import {create} from "zustand/index";
import {createJSONStorage, persist} from "zustand/middleware";

interface PlanState {
    planChoice: number,
    setPlanChoice: (newPlanChoice: number) => void,
}

export const planStore = create<
    PlanState,
    [
        ['zustand/persist', PlanState],
    ]
>(
    persist(
        (set, get) => ({
            planChoice: 0,
            setPlanChoice: (newPlanChoice: number) => set({planChoice: newPlanChoice}),
        }),
        {
            name: "planChoice",
            storage: createJSONStorage(() => localStorage),
        },
    ))