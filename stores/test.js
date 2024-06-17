import { defineStore } from "pinia";

export const useTestStore = defineStore("alerts", () => {
  const count = ref(0);

  return { count };
});
