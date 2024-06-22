export const useCharts = () => {
  const paperTradingChartOptions = {
    colors: ["#2C80FF", "#9264FF", "#D1963C", "#1EC0D9"],
    chart: {
      type: "pie",
      zooming: {
        type: "xy",
      },
      backgroundColor: "#fff0",
      height: 200,
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: [
      {
        categories: ["", "", "", ""],
        crosshair: false,
        labels: {
          enabled: false,
        },
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          enabled: false,
        },
        title: {
          text: "",
        },
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
      align: "right",
      x: 0,
      verticalAlign: "top",
      y: 10,
      floating: true,
      backgroundColor: "rgba(255,255,255,0.25)",
    },
    series: [
      {
        name: "Balance",
        data: [
          {
            name: "Bitcoin",
            y: 40,
          },
          {
            name: "Ethereum",
            y: 10,
          },
          {
            name: "XRP",
            y: 20,
          },
          {
            name: "Dash",
            y: 30,
          },
        ],
        tooltip: {
          valueSuffix: " %",
        },
        dataLabels: {
          enabled: false,
        },
        size: "100%",
        innerSize: "80%",
      },
    ],
  };
  const paperTradingChartOptions2 = {
    // colors: ["#2C80FF", "#9264FF", "#D1963C", "#1EC0D9"],
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
        categories: [],
        crosshair: false,
        labels: {
          enabled: false,
        },
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          enabled: false,
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
        type: "area",
        name: "Balance",
        data: [10, 13, 20, 22, 18, 30, 19, 20, 30, 18, 22, 9, 13],
        tooltip: {
          valueSuffix: "",
        },
        dataLabels: {
          enabled: false,
        },
      },
    ],
  };

  return {
    paperTradingChartOptions,
    paperTradingChartOptions2,
  };
};
