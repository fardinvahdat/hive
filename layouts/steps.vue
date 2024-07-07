<template>
    <div class="w-full min-h-screen h-full bg-Gray-b1" v-if="isLoaded">
        <header class="flex w-full items-center justify-end h-[60px] px-6">
            <NuxtLink to="/dashboard" class="lg:text-base text-Gray-b6 font-medium text-sm">Skip All</NuxtLink>
        </header>
        <slot />
    </div>
    <div class="h-screen w-screen flex items-center justify-center" v-else>
        <img src="/splash.png" class="max-w-[400px] object-contain" />
    </div>
</template>

<script setup>

const isLoaded = ref(false)

onMounted(() => {
    isLoaded.value = true
})
</script>