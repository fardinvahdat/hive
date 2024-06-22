import useUiStore from "~~/stores/ui";

export default defineNuxtRouteMiddleware(async (to, from) => {
//   setTimeout(() => {}, 2000);
  useUiStore().setPageLoader(true);
});
