<template>
    <header class="bg-Gray-b2 rounded-lg lg:p-8 p-4 grid grid-cols-3 gap-6 my-6">
        <div class="lg:col-span-1 col-span-3">
            <div class="lg:text-2xl text-lg text-Gray-b6 font-medium flex items-center gap-3">
                <img :src="`/icons/${state.Name.icon}-color.svg`" :alt="state.Name.value" class="w-12 h-12">
                <div class="flex flex-col items-start">
                    {{ state.Name.value }}
                    <p class=" text-xs text-Gray-b4 font-normal">{{ state.Name.caption }}</p>
                </div>
                <div @click="state.index.isFavorite = !state.index.isFavorite" class="cursor-pointer">
                    <img :src="state.index.isFavorite ? '/icons/star-fill.svg' : '/icons/star.svg'" class="w-6 h-6" />
                </div>
            </div>
            <ul class="mt-6">
                <li v-for="(item, index) in links" :key="index">
                    <a href="javascript:void(0)" class="text-xs flex items-center gap-2 py-2
                        ">
                        <Icon :name="item.icon" />
                        {{ item.text }}
                    </a>
                </li>
            </ul>
        </div>
        <div class="lg:col-span-2 col-span-3 grid grid-cols-3 lg:gap-0 gap-6">
            <div class="lg:col-span-1 col-span-3">
                <div class="lg:text-2xl text-lg text-Gray-b6 font-medium">
                    <p class="text-xs text-Gray-b4 font-normal">Price</p>
                    {{ state.Price.value }}
                    <p class=" text-xs text-Gray-b4 font-normal">1.00000000 BTC<span class="text-Red ml-2">-1.12%</span>
                    </p>
                </div>

            </div>
            <div class="lg:col-span-1 col-span-3">
                <div class="flex justify-between items-center lg:gap-0 gap-6">
                    <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                        Rank
                        <span class="rounded-2xl bg-Blue px-2 py-[2px] text-Gray-b6">
                            Rank 1
                        </span>
                    </div>
                    <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                        Health
                        <span class="text-Gray-b6 text-base">Attractive</span>
                    </div>
                    <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                        Sentiment
                        <span class="text-Gray-b6 text-base">Attractive</span>
                    </div>
                </div>

            </div>
            <div class="lg:col-span-1 col-span-3 flex lg:justify-end gap-2">
                <Icon name="buy" />
                <Icon name="exchange" />
            </div>
            <div class="lg:col-span-1 col-span-3">
                <div class="lg:text-lg text-base text-Gray-b6 font-medium">
                    <p class="text-xs text-Gray-b4 font-normal">Market Cap</p>
                    $302,595,476,474 USD
                    <p class=" text-xs text-Gray-b4 font-normal">2,687,684 BTC</p>
                </div>

            </div>
            <div class="lg:col-span-1 col-span-3">
                <div class="lg:text-lg text-base text-Gray-b6 font-medium">
                    <p class="text-xs text-Gray-b4 font-normal">Volume</p>
                    {{ state.Volume.value }}
                    <p class=" text-xs text-Gray-b4 font-normal">2,687,684 BTC</p>
                </div>

            </div>
            <div class="lg:col-span-1 col-span-3">
                <BaseCellsLineChart :series="[13, 40, 25, 70, 9]" />
            </div>
        </div>


    </header>
</template>

<script setup>
const props = defineProps({
    links: {
        default: []
    },
    state: {
        default: null
    }
})
</script>