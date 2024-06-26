<template>
  <div class="flex items-center justify-end gap-2">
    <div class="h-5 w-5" v-if="state.icon">
      <Icon :name="state.icon" />
    </div>
    <div class="">
      <h4 class="text-sm font-medium" :style="`color:${colors[state.valueColor].value || colors[0].value}`">
        <template v-if="!state.isLink">
          {{ state.value }}
        </template>
        <NuxtLink v-else :to="`${state.path}${state.id}`">{{ state.value }}</NuxtLink>
      </h4>
      <div class="text-xs font-normal" :style="`color:${colors[state.captionColor].value || colors[1].value}`">
        {{ state.caption }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  state: {
    default: {
      type: "simple",
      align: "",
      value: null,
      icon: "",
      caption: "",
      valueColor: 0,
      captionColor: 1,
      id: 0,
      isLink: false,
      path: ''
    },
  },
});
const colors = [
  {
    label: "primary",
    value: "#FFFFFF",
  },
  {
    label: "secondary",
    value: "#E9E9EA",
  },
  {
    label: "green",
    value: "#49DF3E",
  },
  {
    label: "red",
    value: "#BA1D1D",
  },
];
</script>
