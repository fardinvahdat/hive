<template>
    <div class="grid grid-cols-3 justify-center gap-6">
        <div class="xl:col-span-2 col-span-3 xl:order-1 order-2">
            <BaseWritePost />
            <BasePostCard v-for="(item, index) in [...posts, ...posts, ...posts, ...posts]" :key="index"
                :state="item" />
        </div>
        <div class="xl:col-span-1 col-span-3 order-1">
            <TheSocialTradingBigMovers />
        </div>
    </div>
</template>

<script setup>

import { usePostsStore } from '@/stores/posts'

const { posts } = usePostsStore()
</script>