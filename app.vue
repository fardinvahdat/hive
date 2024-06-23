<template>
    <div>
        <NuxtPwaAssets />
        <NuxtLoadingIndicator />
        <pwa-splash-screen-image src="/splash.png" />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
<script setup>
const { $pwaIcons } = useNuxtApp()
</script>