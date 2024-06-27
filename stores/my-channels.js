import { defineStore } from "pinia";

export const useMyChannelsStore = defineStore("myChannels", () => {
  const myChannel = [
    {
      Name: {
        relatedHeaderId: 1,
        type: "with-image",
        align: "end",
        text: "XRP",
        image: "/icons/eth.svg",
      },
      Order: {
        relatedHeaderId: 2,
        type: "simple",
        align: "end",
        value: "Sell",
        icon: "up",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      Trading: {
        relatedHeaderId: 3,
        type: "simple",
        align: "end",
        value: "312",
        icon: "",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      Closing: {
        relatedHeaderId: 4,
        type: "simple",
        align: "end",
        value: "Nov, 07, 2018",
        icon: "",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      "Last Action": {
        relatedHeaderId: 5,
        type: "simple",
        align: "end",
        value: "Nov, 07, 2018",
        icon: "up",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      Profit: {
        relatedHeaderId: 6,
        type: "simple",
        align: "end",
        value: "+30%",
        icon: "",
        caption: "",
        valueColor: 2,
        captionColor: 1,
      },
    },
    {
      Name: {
        relatedHeaderId: 1,
        type: "with-image",
        align: "end",
        text: "XRP",
        image: "/icons/eth.svg",
      },
      Order: {
        relatedHeaderId: 2,
        type: "simple",
        align: "end",
        value: "Buy",
        icon: "down",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      Trading: {
        relatedHeaderId: 3,
        type: "simple",
        align: "end",
        value: "178",
        icon: "",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      Closing: {
        relatedHeaderId: 4,
        type: "simple",
        align: "end",
        value: "Nov, 07, 2018",
        icon: "",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      "Last Action": {
        relatedHeaderId: 5,
        type: "simple",
        align: "end",
        value: "Nov, 07, 2018",
        icon: "down",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      Profit: {
        relatedHeaderId: 6,
        type: "simple",
        align: "end",
        value: "-30%",
        icon: "",
        caption: "",
        valueColor: 3,
        captionColor: 1,
      },
    },
    {
      Name: {
        relatedHeaderId: 1,
        type: "with-image",
        align: "end",
        text: "XRP",
        image: "/icons/eth.svg",
      },
      Order: {
        relatedHeaderId: 2,
        type: "simple",
        align: "end",
        value: "Sell",
        icon: "up",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      Trading: {
        relatedHeaderId: 3,
        type: "simple",
        align: "end",
        value: "312",
        icon: "",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      Closing: {
        relatedHeaderId: 4,
        type: "simple",
        align: "end",
        value: "Nov, 07, 2018",
        icon: "",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      "Last Action": {
        relatedHeaderId: 5,
        type: "simple",
        align: "end",
        value: "Nov, 07, 2018",
        icon: "up",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      Profit: {
        relatedHeaderId: 6,
        type: "simple",
        align: "end",
        value: "+30%",
        icon: "",
        caption: "",
        valueColor: 2,
        captionColor: 1,
      },
    },
    {
      Name: {
        relatedHeaderId: 1,
        type: "with-image",
        align: "end",
        text: "XRP",
        image: "/icons/eth.svg",
      },
      Order: {
        relatedHeaderId: 2,
        type: "simple",
        align: "end",
        value: "Buy",
        icon: "down",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      Trading: {
        relatedHeaderId: 3,
        type: "simple",
        align: "end",
        value: "178",
        icon: "",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      Closing: {
        relatedHeaderId: 4,
        type: "simple",
        align: "end",
        value: "Nov, 07, 2018",
        icon: "",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      "Last Action": {
        relatedHeaderId: 5,
        type: "simple",
        align: "end",
        value: "Nov, 07, 2018",
        icon: "down",
        caption: "",
        valueColor: 0,
        captionColor: 1,
      },
      Profit: {
        relatedHeaderId: 6,
        type: "simple",
        align: "end",
        value: "-30%",
        icon: "",
        caption: "",
        valueColor: 3,
        captionColor: 1,
      },
    },
  ];
  const headers = [
    { label: "Name", sortable: false, align: "start", id: 1 },
    {
      label: "Order",
      sortable: true,
      sortType: 1,
      align: "end",
      id: 2,
    },
    { label: "Trading", sortable: true, sortType: 1, align: "end", id: 3 },
    { label: "Closing", sortable: true, sortType: 1, align: "end", id: 4 },
    { label: "Last Action", sortable: true, sortType: 1, align: "end", id: 5 },
    { label: "Profit", sortable: true, sortType: 1, align: "end", id: 6 },
  ];
  return { myChannel, headers };
});