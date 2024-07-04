import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Bear {
  id: number,
  name: string,
}

interface bearState {
  blackBears: number,
  polarBears: number,
  pandaBears: number,
  bears: Bear[];


  totalBears: () => number;


  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;
  addBear: () => void;
  clearBears: () => void;
}

export const useBearStore = create<bearState>()(

  persist((set, get) => ({
    blackBears: 0,
    polarBears: 0,
    pandaBears: 0,
    bears: [{ id: 1, name: 'Oso #1' }],

    totalBears: () => {
      return get().blackBears + get().polarBears + get().pandaBears + get().bears.length;
    },

    increaseBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
    increasePolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
    increasePandaBears: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),
    //removeAllBears: ()=> set({bears: 0})
    addBear: () => set(state =>
    ({
      bears: [
        ...state.bears,
        { id: state.bears.length + 1, name: `Oso #${state.bears.length + 1}` }
      ]
    })
    ),
    clearBears: () => set({ bears: [] }),

  }), {
    name: 'bear-storage',
    getStorage: () => localStorage,
  })
)













