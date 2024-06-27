<template>
    <div class="bg-Gray-b1 rounded-lg">
        <header :style="{ backgroundColor: state.color }" class="h-[132px] rounded-t-lg"></header>
        <div class="p-4 h-[147px] flex flex-col justify-between">
            <h6 class="lg:text-base text-sm font-medium text-Gray-b6 cursor-pointer">{{ state.title }}</h6>
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <div :style="{ backgroundColor: state.color }"
                        class="min-h-4 min-w-4 h-full w-full max-w-4 max-h-4 rounded-full">
                    </div>
                    <span class="lg:text-sm text-xs font-medium text-Gray-b6">{{ state.author }}</span>
                </div>
                <span class="lg:text-sm text-xs font-medium text-Gray-b4">{{ state.date }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    state: {
        default: {
            color: "",
            title: "",
            author: "",
            date: "",
        }
    }
})
</script>