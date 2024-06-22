<template>
    <button class="px-6 py-2 rounded-xl md:text-base text-sm font-medium border-[1px] w-fit"
        :class="type == 'primary' ? 'bg-Primary border-transparent text-Gray-b1' : type == 'secondary' ? 'text-Blue border-Blue' : ''">
        <slot />
    </button>
</template>

<script setup>
const porps = defineProps({
    type: {
        default: "primary"
    }
})
</script>