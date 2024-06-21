<template>
  <div class="line-less">
    <highchart :options="chartOptions" />
  </div>
</template>

<script setup>
const chartOptions = computed(() => {
  return {
    colors: ["#5177ff"],
    chart: {
      type: "column",
      height: 55,
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      categories: ["", "", "", "", "", ""],
      labels: {
        enabled: false,
      },
      lineWidth: 0,
    },
    yAxis: {
      title: {
        text: "",
      },
      labels: {
        enabled: false,
      },
    },
    tooltip: {
      valuePrefix: "eth ",
      enabled: true,
      headerFormat: "",
      // pointFormat: "",
    },
    plotOptions: {
      column: {
        pointPadding: 0,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "",
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
    default: [406292, 260000, 107000, 68300, 27500, 14500],
  },
});

const values = computed(() => props.series);
</script>
<style scoped>
.highcharts-credits,
.highcharts-grid-line {
  display: none;
}
</style>
