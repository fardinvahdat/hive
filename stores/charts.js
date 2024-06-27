import { defineStore } from "pinia";

export const useChartsStore = defineStore("charts", () => {
  const coinsChartOption = ref({
    colors: ["#C22ABD", "#3263C0"],
    chart: {
      zooming: {
        type: "x",
      },
      backgroundColor: "#fff0",
      // height: 200,
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: [
      {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        crosshair: false,
        labels: {
          enabled: true,
        },
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          enabled: true,
        },
        title: {
          text: "",
        },
        gridLineColor: "#e6e6e657",
      },
      {
        // Primary yAxis
        labels: {
          enabled: false,
        },
        title: {
          text: "",
        },
      },
    ],
    tooltip: {
      shared: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0, "#424f5b69"],
            [1, "#424f5b69"],
          ],
        },
        marker: {
          radius: 2,
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1,
          },
        },
        threshold: null,
      },
    },
    series: [
      {
        type: "spline",
        name: "Balance",
        data: [10, 13, 20, 22, 18, 30, 19, 20, 30, 18, 22, 9, 13],
        tooltip: {
          valueSuffix: "",
        },
        dataLabels: {
          enabled: false,
        },
      },
      {
        type: "spline",
        name: "Balance",
        data: [20, 23, 30, 12, 15, 30, 19, 29, 10, 18, 22, 29, 10],
        tooltip: {
          valueSuffix: "",
        },
        dataLabels: {
          enabled: false,
        },
      },
    ],
  });

  return { coinsChartOption };
});
