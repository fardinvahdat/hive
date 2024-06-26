<template>
    <div class="flex items-center">
        <div class="flex items-center justify-between w-full gap-2"><span class="text-sm font-normal text-Gray-b4">{{
            index }}</span>
            <img :src="state.isFavorite ? ' /icons/star-fill.svg' : '/icons/star.svg'"
                @click="state.isFavorite = !state.isFavorite" :alt="state.text"
                class="w-6 h-6 rounded-lg object-fill" />

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    state: {
        default: {
            type: "favorite",
            align: "",
            text: "",
            isFavorite: false,
        },
    },
    index: {
        default: 0
    }
});
</script>
