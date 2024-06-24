<template>
    <div class="bg-Gray-b2 rounded-lg flex flex-col">
        <header class="background-gradiant h-[173px] rounded-lg p-4 flex flex-col justify-end"
            :style="`background-color:${state.background}`">
            <h3 class="font-medium text-[20px] text-Gray-b6">{{ state.title }}</h3>
            <p class="text-sm text-Gray-b5 font-medium">{{ state.caption }}</p>
        </header>
        <div class="flex flex-col gap-6 p-4">
            <div class="flex justify-between items-center">
                <div class="text-sm text-Gray-b4 font-normal">Last Profit :
                    <span class="text-base"
                        :class="state.lastProfit > 0 ? 'text-Greeen' : state.lastProfit < 0 ? 'text-Red' : ''">
                        {{ state.lastProfit }}%
                    </span>
                    <span v-for="(tag, i) in state.tags" :key="i"
                        class="rounded-2xl bg-Blue px-2 py-[2px] text-Gray-b6">{{
                tag.label
            }}</span>
                </div>
                <div class="text-xl text-Primary font-medium">{{ state.price == 0 ? 'Free' : state.price
                    }}<span v-if="state.price" class="text-xs">$</span></div>
            </div>
            <div class="flex justify-between items-center">
                <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                    Market Base
                    <span class="text-Gray-b6 text-base">{{ state.marketBase }}</span>
                </div>
                <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                    Num OF SUB
                    <span class="text-Gray-b6 text-base">{{ state.numOFSUB }}</span>
                </div>
                <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                    Risk
                    <span class="text-Gray-b6 text-base">{{ state.risk }}</span>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <BaseButton class="w-full !rounded-lg" :type="state.isSubscribed ? 'primary' : 'primary-outline'">{{
                state.isSubscribed ? 'Subscribed' :
                    'Subscrib' }}</BaseButton>
                <BaseButton class="w-full !rounded-lg !border-Gray-b4 !text-Gray-b4 !bg-transparent !text-sm">Learn
                    More</BaseButton>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    state: {
        default: {
            id: 0,
            title: "",
            caption: "",
            lastProfit: 0,
            tags: [],
            price: 0,
            marketBase: "",
            numOFSUB: 0,
            risk: "",
            isSubscribed: false,
            background: "",
        }
    }
})
</script>
<style>
.background-gradiant {
    background: linear-gradient(240.39deg, rgba(30, 36, 41, 0) 37.45%, rgba(30, 36, 41, 0.741) 91.77%);
}
</style>