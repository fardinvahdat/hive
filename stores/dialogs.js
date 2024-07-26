import { defineStore } from "pinia";

export const useDialogStore = defineStore("dialogs", () => {
  const writePost = ref(false);

  return { writePost };
});
