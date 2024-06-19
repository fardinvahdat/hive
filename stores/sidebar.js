import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", () => {
  const list = [
    {
      label: "Dashboard",
      icon: "dashboard",
      route: "/dashboard",
    },
    {
      label: "Portfolio",
      icon: "portfolio",
      route: "/portfolio",
    },
    {
      label: "Coins",
      icon: "coins",
      route: "/coins",
    },
    {
      label: "Channels",
      icon: "channels",
      route: "/channels",
    },
    {
      label: "Profile",
      icon: "profile",
      route: "/profile",
    },
  ];

  return { list };
});
