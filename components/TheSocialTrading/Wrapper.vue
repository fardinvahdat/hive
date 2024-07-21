<template>
    <div class="grid grid-cols-3 justify-center gap-6">
        <div class="lg:col-span-2 col-span-3">
            <BaseWritePost />
            <BasePostCard v-for="(item, index) in posts" :key="index" :state="item" />
        </div>
        <div class="lg:col-span-1 col-span-3">widgets</div>
    </div>
</template>

<script setup>

import { usePostsStore } from '@/stores/posts'

const { posts } = usePostsStore()
</script>