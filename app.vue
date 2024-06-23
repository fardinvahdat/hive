<template>
    <div>
        <NuxtPwaAssets />
        <NuxtLoadingIndicator /><pwa-splash-screen-image :src="$pwaIcons?.splash" />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
<script setup>
const { $pwaIcons } = useNuxtApp()
</script>