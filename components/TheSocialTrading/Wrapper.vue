<template>
    <div class="grid grid-cols-3 justify-center gap-6">
        <div class="xl:col-span-2 col-span-3 xl:order-1 order-2">
            <BaseWritePost />
            <BasePostCard v-for="(item, index) in [...posts, ...posts, ...posts, ...posts]" :key="index"
                :state="item" />
        </div>
        <div class="xl:col-span-1 col-span-3 order-1">
            <TheSocialTradingBigMovers />
            <p class="text-Gray-b4 text-sm font-medium my-4">Significant gainers and losers from your portfolio and all
                your watchlists since •r,r• last trading day.
            </p>
            <TheSocialTradingInvestors />
        </div>
    </div>
</template>

<script setup>

import { usePostsStore } from '@/stores/posts'

const { posts } = usePostsStore()
</script>