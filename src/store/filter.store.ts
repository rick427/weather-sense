import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { zustandStorage } from "@/helpers/storage";

interface FilterState {
    city: string; 
    setCity: (city:string) => void;
}

export const useFilterStore = create<FilterState>()(
    persist(
        (set, get) => ({
            city: "",
            setCity: (city) => set({ city }),
        }),
        {
            name: "filter-store",
            storage: createJSONStorage(() => zustandStorage),
        }
    )
)