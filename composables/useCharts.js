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

  return {
    paperTradingChartOptions,
  };
};
