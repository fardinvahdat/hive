<template>
    <div class="h-[318px] rounded-xl bg-Gray-b1 border-[1px] border-Gray-b1">
        <header class="h-[47px] flex items-center px-4">
            <h1 class="text-[14px] font-medium text-Gray-b6">Balance Change <span
                    class="text-xs font-light">((in-time))</span></h1>
        </header>
        <div
            class="flex flex-col bg-Gray-b2 gap-4 px-4 py-1 max-h-[271px] overflow-y-auto border-b-[1px] border-Gray-b1 rounded-b-xl">
            <div v-for="(item, index) in state" :key="index" class="grid grid-cols-2 items-center">
                <div class="flex flex-col gap-1">
                    <h5 class="text-[20px] font-light text-Gray-b6">{{ item.firstCol.label }}</h5>
                    <p class="text-[14px] font-normal text-Gray-b6">{{ item.firstCol.value }}</p>
                    <p class="text-[10px] font-normal text-Gray-b6">{{ item.firstCol.caption }}</p>
                </div>
                <div class="flex flex-col gap-1">
                    <h5 class="text-[20px] font-light" :class="item.secondCol.label > 0 ? 'text-Greeen' : 'text-Red'">{{
                item.secondCol.label }} %
                    </h5>
                    <p class="text-[14px] font-normal text-Gray-b6">{{ item.secondCol.value }}</p>
                    <p class="text-[10px] font-normal text-Gray-b6">{{ item.secondCol.caption }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    state: {
        default: [
            {
                firstCol: {
                    label: "XRP", value: "312", caption: "Nov, 07, 2018"
                },
                secondCol: {
                    label: +30, value: "312", caption: "Nov, 07, 2018"
                }
            }
        ]
    }
})
</script>