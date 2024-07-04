import { StateCreator } from "zustand";

export interface confirmationSlice {
    isConfirmed: boolean;
    setIsConfirmed: (isConfirmed: boolean) => void;
}

export const createConfirmationSlice: StateCreator<confirmationSlice> = (set) => ({
    isConfirmed: false,
    setIsConfirmed: (isConfirmed: boolean) => set({ isConfirmed })
})
