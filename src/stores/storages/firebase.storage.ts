import { StateStorage, createJSONStorage } from "zustand/middleware";

const firebaseUrl = "https://zustand-firebase-f66bd-default-rtdb.firebaseio.com/zustand"

const storageApi: StateStorage = {
    getItem: async function (name:string) : Promise <string | null >  {
      try {
        const data =  await fetch(`${firebaseUrl}/${name}.json`).then(res => res.json());
        return JSON.stringify(data);
        console.log('data en getItem',data);
      } catch (error) {
        throw error
      }
     
    },
    setItem: async function (name: string, value: string): Promise<void>  {
      const data =  await fetch(`${firebaseUrl}/${name}.json`,{
        method: 'PUT',
        body: value,
      }).then(res => res.json());
      console.log({data});
      return;
    },
}

export const fireBaseStorage = createJSONStorage(() => storageApi);