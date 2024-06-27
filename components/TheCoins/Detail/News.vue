<template>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        <BaseCard2 v-for="(item, index) in news" :key="index" :state="item" />
    </div>
</template>

<script setup>
import { useCoinsStore } from '@/stores/coins'

const { news } = useCoinsStore()
</script>