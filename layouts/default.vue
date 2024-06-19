<template>
    <div class="flex lg:flex-row flex-col">
        <BaseSidebar />
        <div
            class="lg:max-h-screen max-h-[calc(100vh-60px)] lg:overflow-y-auto overflow-x-auto w-full p-4 bg-Gray-b1 lg:pl-7 text-Gray-b6">
            <BaseHeader class="hidden lg:flex"/>
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>