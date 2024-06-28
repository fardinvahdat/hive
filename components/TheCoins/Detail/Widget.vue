<template>
    <div class="rounded-lg bg-Gray-b1 border-[1px] border-Gray-b1">
        <header class="h-[64px] flex items-center lg:px-4 px-2">
            <h1 class="text-lg font-medium text-Gray-b6">{{ header }} </h1>
        </header>
        <div class="flex flex-col border-b-[1px] border-Gray-b1 rounded-b-xl"
            :class="type == 'secondary' ? 'bg-Gray-b1' : 'bg-Gray-b2'">
            <div class="flex justify-between items-center h-[64px] min-h-[64px] lg:px-4 px-2"
                v-for="(listItem, index) in state" :key="index"
                :class="index % 2 == 0 ? '' : type == 'secondary' ? 'bg-Gray-b2' : 'bg-Gray-b1'">
                <div class="flex items-center gap-4">
                    <p class="md:text-sm text-xs text-Gray-b4 font-medium">{{ listItem.label }}</p>
                    <div class="flex flex-col  md:text-sm text-xs text-Gray-b4 font-medium">
                        <span v-for="(item, index) in listItem.caption" :key="index">{{ item }}</span>
                    </div>
                </div>
                <div class="md:text-base text-sm font-medium flex flex-col "
                    :class="listItem.color ? `` : 'text-Gray-b6'" :style="`color:${listItem.color}`">
                    <span v-for="(item, index) in listItem.values" :key="index">{{ item }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    header: {
        default: ''
    },
    state: {
        default: [
            {
                label: "",
                caption: [],
                values: [],
                color: 'Gray-b6'
            },
        ]
    },
    type: {
        default: ''
    }
})
</script>