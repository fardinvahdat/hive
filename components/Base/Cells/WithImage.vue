<template>
  <div class="flex items-center">
    <img :src="state.image" :alt="state.text" class="w-10 h-10 rounded-lg object-fill bg-Gray-b3 p-2 mr-2"
      v-if="state.image" />
    <h4 class="text-Gray-b6 text-sm font-medium">{{ state.text }}</h4>
  </div>
</template>

<script setup>
const props = defineProps({
  state: {
    default: {
      type: "with-image",
      align: "",
      text: "",
      image: "",
    },
  },
});
</script>
