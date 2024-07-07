<template>
    <div class="flex lg:flex-row flex-col" v-if="$pwa.swActivated">
        <LoaderIndicator />
        <BaseSidebar />
        <div
            class="lg:max-h-screen max-h-[calc(100vh-60px)] lg:overflow-y-auto overflow-x-auto w-full p-4 bg-Gray-b1 lg:pl-7 text-Gray-b6">
            <BaseHeader class="hidden lg:flex" />
            <slot />
        </div>

        <ClientOnly>
            <div v-if="$pwa?.offlineReady || $pwa?.needRefresh" class="pwa-toast" role="alert">
                <div class="message">
                    <span v-if="$pwa.offlineReady">
                        App ready to work offline
                    </span>
                    <span v-else>
                        New content available, click on reload button to update.
                    </span>
                </div>
                <button v-if="$pwa.needRefresh" @click="$pwa.updateServiceWorker()">
                    Reload
                </button>
                <button @click="$pwa.cancelPrompt()">
                    Close
                </button>
            </div>
            <div v-if="$pwa?.showInstallPrompt && !$pwa?.offlineReady && !$pwa?.needRefresh" class="pwa-toast"
                role="alert">
                <div class="message">
                    <span>
                        Install PWA
                    </span>
                </div>
                <button @click="$pwa.install()">
                    Install
                </button>
                <button @click="$pwa.cancelInstall()">
                    Cancel
                </button>
            </div>
        </ClientOnly>
    </div>
    <div v-else>
        Application is pending...
    </div>
</template>

<script setup>
const { swActivated } = useNuxtApp().$pwa;
</script>
<style>
.pwa-toast {
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 16px;
    padding: 12px;
    border: 1px solid #8885;
    border-radius: 4px;
    z-index: 1;
    text-align: left;
    box-shadow: 3px 4px 5px 0 #8885;
}

.pwa-toast .message {
    margin-bottom: 8px;
}

.pwa-toast button {
    border: 1px solid #8885;
    outline: none;
    margin-right: 5px;
    border-radius: 2px;
    padding: 3px 10px;
}
</style>