<template>
  <div class="flex flex-col items-end justify-center gap-2">
    <div class="text-Gray-b2 text-sm font-medium flex items-center">
      <img :src="'/icons' + state.icon" class="h-4 w-4" v-if="state.icon" />
      <div>
        {{ state.title
        }}<span class="text-Gray-b3" v-if="state.caption"
          >({{ state.caption }})</span
        >
      </div>
    </div>
    <div class="relative h-1 rounded-xl bg-Gray-b4 w-full -z-10">
      <div
        class="absolute left-0 top-[0.5px] bg-Primary h-[3px] rounded-xl"
        :style="`width:calc(100% - ${
          100 - handleFormat(state.completed / state.total)
        }%)`"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  state: {
    default: {
      relatedHeaderId: 0,
      type: "range",
      align: "",
      completed: 0,
      total: 0,
      title: null,
      caption: null,
      icon: null,
    },
  },
});

const handleFormat = (num) => {
  return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    num * 100
  );
};
</script>
