import {create} from 'zustand';

interface Bear {
  id:number,
  name: string,
}

interface bearState {
  blackBears: number,
  polarBears: number,
  pandaBears: number,
  bears: Bear[];
  
  computed: {
    totalBears: number;
  },

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;
  addBear: ()=> void;
  clearBears: ()=> void;
}

export const useBearStore = create<bearState>()((set,get)=>({
  blackBears: 15,
  polarBears: 15,
  pandaBears: 15,  
  bears: [{id: 1, name:'Oso #1'}],
  
  computed: {
    get totalBears() {
      return get().blackBears + get().polarBears + get().pandaBears + get().bears.length;
    }
  },

  increaseBlackBears: (by:number) => set((state) => ({blackBears: state.blackBears + by})),
  increasePolarBears: (by:number) => set((state) => ({polarBears: state.polarBears + by})),
  increasePandaBears: (by:number) => set((state) => ({pandaBears: state.pandaBears + by})),
  //removeAllBears: ()=> set({bears: 0})
  addBear: () => set(state => 
    ({
      bears: [
        ...state.bears, 
        {id:state.bears.length + 1, name: `Oso #${state.bears.length + 1}`}
      ]
    })
  ),
  clearBears: () => set({bears: []}),
}));