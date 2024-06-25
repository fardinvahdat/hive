<template>
    <div class="widget rounded-xl grid grid-cols-3">
        <div class="col-span-2 flex flex-col justify-between gap-3 p-6">
            <div class="flex justify-between">
                <span class="text-Gray-b6 font-light text-sm">{{ state.label }}</span>
                <p class="text-Gray-b6 font-normal text-sm">USD</p>
            </div>
            <p class="text-Gray-b6 font-medium text-xl">{{ state.value }}</p>
            <div class="flex items-center gap-4">
                <p class="text-Gray-b6 font-normal text-xs">{{ state.exchange }}</p>
                <p class="font-normal text-xs" :class="state.percent > 0 ? 'text-Greeen' : 'text-Red'">{{ state.percent
                    }} %</p>
            </div>
        </div>
        <div class="col-span-1 flex items-center justify-center rounded-xl"
            style="background: url(/img/widget-bg.svg) center right no-repeat;background-size: 80%;">
            <Icon :name="state.icon" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    state: {
        default: {
            label: "",
            value: "",
            exchange: "",
            percent: 0,
            icon: ''
        }
    }
})
</script>