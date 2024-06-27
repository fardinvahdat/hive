<template>
    <div class="my-1">
        <BaseBanner />
        <h2 class="font-medium xl:text-[34px] lg:text-[24px] text-lg text-Gray-b6 w-full">Channels</h2>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 my-6">
            <BaseCard v-for="(item, index) in channels" :key="index" :state="item" />
        </div>
    </div>
</template>

<script setup>
import { useChannelsStore } from '@/stores/channels'
const { channels } = useChannelsStore()
</script>