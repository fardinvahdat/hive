import { defineStore } from "pinia";

export const useStepsStore = defineStore("steps", () => {
  const currentStep = ref(0);

  return { currentStep };
});
