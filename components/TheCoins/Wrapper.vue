<template>
    <div class="my-1">
        <header class="flex lg:items-center justify-between lg:flex-row flex-col lg:gap-0 gap-6">
            <h2 class="font-medium xl:text-[34px] lg:text-[24px] text-lg text-Gray-b6">
                Today's Coin Prices by Kennstin Hive
            </h2>
            <div
                class="relative bg-Gray-b2 border-[1px] border-Gray-b3 rounded-xl min-w-[311px] max-w-[311px] w-full h-10 flex gap-2 items-center px-4">
                <div class="cursor-pointer">
                    <Icon name="search" />
                </div>
                <input v-model="search" placeholder="Search ..." class="border-0 bg-transparent outline-none w-full" />
            </div>
        </header>
        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 my-6">

        </div>
    </div>
</template>

<script setup>
const search = ref("")
</script>