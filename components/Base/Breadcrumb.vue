<template>
    <div class="flex items-center gap-2">
        <NuxtLink v-for="(item, index) in state" :key="index" :to="item.route"
            class="font-medium text-[14px] text-Gray-b5 flex items-center gap-2">{{
            item.label }}
            <Icon v-if="index !== state.length - 1" name="angle-right" />
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    state: {
        default: [
            {
                label: "",
                route: ''
            }
        ]
    }
})
</script>