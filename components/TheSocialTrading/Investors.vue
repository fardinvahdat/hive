<template>
    <div class="lg:p-8 lg:pb-0 p-4 pb-0 rounded-lg bg-Gray-b2">
        <p class="text-Gray-b4 font-normal text-sm">These investors have outperformed <span
                class="text-Gray-b6 font-medium">the SPX500
                Index (Non Expiry)</span> <span class="text-Greeen font-medium">(22.66%)</span> over the last 12 months
        </p>
        <ul class="mt-6 border-b-[1px] border-Gray-b4">
            <li v-for="(item, index) in investors" :key="index" class="flex items-center gap-2 mb-4">
                <img :src="item.icon" :alt="item.name" class="rounded-lg h-10 w-10">
                <div class="w-full flex flex-col gap-2">
                    <p class="text-base font-medium text-Gray-b6">{{ item.name }}
                        <span class="text-Greeen text-sm">( {{ item.increase }}%)</span>
                    </p>
                    <div class="relative rounded-xl h-1 w-full bg-Gray-b3">
                        <div class="absolute left-0 h-full rounded-xl bg-Greeen" :style="`width:${item.increase}%`">
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <NuxtLink to="/social-trading" class="w-full text-Greeen text-center block py-4"> Discover CopeTrader</NuxtLink>
    </div>
</template>

<script setup>
const investors = ref([
    {
        name: 'Loukenti Billa',
        increase: 98.18,
        icon: "/investors/1.jpg"
    },
    {
        name: 'Loukenti Billa',
        increase: 80.91,
        icon: "/investors/1.jpg"
    },
    {
        name: 'Loukenti Billa',
        increase: 38.14,
        icon: "/investors/1.jpg"
    }
])
</script>