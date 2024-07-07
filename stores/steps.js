import { defineStore } from "pinia";

export const useStepsStore = defineStore("steps", () => {
  const currentStep = ref(0);
  const stepsOption = ref([
    {
      step: 1,
      value: null,
      options: [
        {
          value: 1,
          text: "BTW1001$ - 10,000$ PM",
          icon: "coins",
        },
        {
          value: 2,
          text: "Under1000$ PM",
          icon: "dashboard",
        },
        {
          value: 3,
          text: "BTW1001$ - 10,000$ PM",
          icon: "payment",
        },
        {
          value: 4,
          text: "Blow of10,001 PM",
          icon: "channels",
        },
        {
          value: 5,
          text: "Blow of10,001 PM",
          icon: "profile",
        },
      ],
    },
    {
      step: 2,
      value: null,
      options: [
        {
          value: 1,
          text: "BTW1001$ - 10,000$ PM",
          icon: "coins",
        },
        {
          value: 2,
          text: "Under1000$ PM",
          icon: "dashboard",
        },
        {
          value: 3,
          text: "BTW1001$ - 10,000$ PM",
          icon: "payment",
        },
        {
          value: 4,
          text: "Blow of10,001 PM",
          icon: "channels",
        },
        {
          value: 5,
          text: "Blow of10,001 PM",
          icon: "profile",
        },
      ],
    },
    {
      step: 3,
      value: null,
      options: [
        {
          value: 1,
          text: "BTW1001$ - 10,000$ PM",
          icon: "coins",
        },
        {
          value: 2,
          text: "Under1000$ PM",
          icon: "dashboard",
        },
        {
          value: 3,
          text: "BTW1001$ - 10,000$ PM",
          icon: "payment",
        },
        {
          value: 4,
          text: "Blow of10,001 PM",
          icon: "channels",
        },
        {
          value: 5,
          text: "Blow of10,001 PM",
          icon: "profile",
        },
      ],
    },
    {
      step: 4,
      value: null,
      options: [
        {
          value: 1,
          text: "BTW1001$ - 10,000$ PM",
          icon: "coins",
        },
        {
          value: 2,
          text: "Under1000$ PM",
          icon: "dashboard",
        },
        {
          value: 3,
          text: "BTW1001$ - 10,000$ PM",
          icon: "payment",
        },
        {
          value: 4,
          text: "Blow of10,001 PM",
          icon: "channels",
        },
        {
          value: 5,
          text: "Blow of10,001 PM",
          icon: "profile",
        },
      ],
    },
    {
      step: 5,
      value: null,
      options: [
        {
          value: 1,
          text: "BTW1001$ - 10,000$ PM",
          icon: "coins",
        },
        {
          value: 2,
          text: "Under1000$ PM",
          icon: "dashboard",
        },
        {
          value: 3,
          text: "BTW1001$ - 10,000$ PM",
          icon: "payment",
        },
        {
          value: 4,
          text: "Blow of10,001 PM",
          icon: "channels",
        },
        {
          value: 5,
          text: "Blow of10,001 PM",
          icon: "profile",
        },
      ],
    },
    {
      step: 6,
      value: null,
      options: [
        {
          value: 1,
          text: "BTW1001$ - 10,000$ PM",
          icon: "coins",
        },
        {
          value: 2,
          text: "Under1000$ PM",
          icon: "dashboard",
        },
        {
          value: 3,
          text: "BTW1001$ - 10,000$ PM",
          icon: "payment",
        },
        {
          value: 4,
          text: "Blow of10,001 PM",
          icon: "channels",
        },
        {
          value: 5,
          text: "Blow of10,001 PM",
          icon: "profile",
        },
      ],
    },
    {
      step: 7,
      value: null,
      options: [
        {
          value: 1,
          text: "BTW1001$ - 10,000$ PM",
          icon: "coins",
        },
        {
          value: 2,
          text: "Under1000$ PM",
          icon: "dashboard",
        },
        {
          value: 3,
          text: "BTW1001$ - 10,000$ PM",
          icon: "payment",
        },
        {
          value: 4,
          text: "Blow of10,001 PM",
          icon: "channels",
        },
        {
          value: 5,
          text: "Blow of10,001 PM",
          icon: "profile",
        },
      ],
    },
    {
      step: 8,
      value: null,
      options: [
        {
          value: 1,
          text: "BTW1001$ - 10,000$ PM",
          icon: "coins",
        },
        {
          value: 2,
          text: "Under1000$ PM",
          icon: "dashboard",
        },
        {
          value: 3,
          text: "BTW1001$ - 10,000$ PM",
          icon: "payment",
        },
        {
          value: 4,
          text: "Blow of10,001 PM",
          icon: "channels",
        },
        {
          value: 5,
          text: "Blow of10,001 PM",
          icon: "profile",
        },
      ],
    },
    {
      step: 9,
      value: null,
      options: [
        {
          value: 1,
          text: "BTW1001$ - 10,000$ PM",
          icon: "coins",
        },
        {
          value: 2,
          text: "Under1000$ PM",
          icon: "dashboard",
        },
        {
          value: 3,
          text: "BTW1001$ - 10,000$ PM",
          icon: "payment",
        },
        {
          value: 4,
          text: "Blow of10,001 PM",
          icon: "channels",
        },
        {
          value: 5,
          text: "Blow of10,001 PM",
          icon: "profile",
        },
      ],
    },
  ]);

  return { currentStep, stepsOption };
});
