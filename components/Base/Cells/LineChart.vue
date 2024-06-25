<template>
  <div class="line-less relative -z-10">
    <highchart :options="chartOptions" />
  </div>
</template>

<script setup>
const chartOptions = computed(() => {
  return {
    colors: [color.value],
    chart: {
      type: "line",
      height: 55,
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      type: "logarithmic",
      minorTickInterval: 0.1,
      labels: {
        enabled: false,
      },
      minorGridLineWidth: 0,
      lineWidth: 0,
      tickLength: 0,
    },
    yAxis: {
      title: {
        text: "",
      },
      labels: {
        enabled: false,
      },
      type: "logarithmic",
      minorTickInterval: 0.1,
    },
    tooltip: {
      valuePrefix: " ",
      enabled: true,
      headerFormat: "",
      pointFormat: "",
    },
    series: [
      {
        pointStart: 1,
        data: values.value,
      },
    ],
    legend: {
      enabled: false,
    },
  };
});

const props = defineProps({
  series: {
    default: [1, 20, 10],
  },
});

const values = computed(() => props.series);
const color = computed(() => {
  const firstItem = props.series[0];
  const lastItem = props.series[props.series.length - 1];
  if (firstItem <= lastItem) return "#008c00";
  return "#ff0000"
});
</script>