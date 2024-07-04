import { create } from "zustand";
import { PersonSlice, createPersonSlice } from "./person.slice";
import { GuestSlice, createGuestSlice } from "./guest.slice";
import { dateSlice, createDateSlice } from "./date.slice";
import { confirmationSlice, createConfirmationSlice } from "./confirmation.slice";
import { devtools } from "zustand/middleware";

type shareState = PersonSlice & GuestSlice & dateSlice & confirmationSlice;

export const useWeddingBounceStore = create<shareState>()(
  devtools(
    (...a) => ({
       ...createPersonSlice(...a),
       ...createGuestSlice(...a),
       ...createDateSlice(...a),
       ...createConfirmationSlice(...a)
    }) 
  )
);
 