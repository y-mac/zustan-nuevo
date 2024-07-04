import { StateCreator } from "zustand";


export interface PersonSlice {
    name: string;
    lastName: string;
    setFirtstName: (name: string) => void;
    setLastName: (lastName: string) => void;
}


export const createPersonSlice: StateCreator<PersonSlice> = (set) => ({
    name: '',
    lastName: '',
    setFirtstName: (name: string) => set({ name }),
    setLastName: (lastName: string) => set({ lastName }),
});
