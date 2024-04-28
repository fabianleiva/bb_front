import { create } from "zustand";
import dayjs from "dayjs";

export const storeDatePicker = create((set) => ({
  date: dayjs(),
  isoDate: dayjs().toISOString(),
  setDate: (value) => set(() => {
    return {
      date: dayjs(value),
      isoDate: dayjs(value).toISOString(),
    }
  }),
}));
