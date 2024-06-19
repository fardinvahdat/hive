<template>
    <div class="flex lg:gap-3 lg:flex-row flex-col">
        <BaseSidebar />
        <div class="lg:max-h-screen max-h-[calc(100vh-60px)] lg:overflow-y-auto overflow-x-auto w-full p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>