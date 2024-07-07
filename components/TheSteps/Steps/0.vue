<template>
    <template v-if="isWellcomeShowed">
        <div class="min-h-[400px] max-h-[400px] h-full flex flex-col items-center justify-around">
            <img src="/logo.svg" alt="hive" />
            <h6 class="lg:text-[48px] md:text-[35px] text-[28px] text-Gray-b6 font-medium">Hi, Welcome ...</h6>
        </div>
    </template>
    <template v-else>
        <div class="flex flex-col justify-center gap-6 w-full">
            <h6 class="lg:text-xl text-lg text-Gray-b6 font-medium">Only 9 Step to personalize suggestions</h6>
            <p class="lg:text-base text-sm text-Gray-b4 font-medium">There is some Questions that knowing them make
                our suggestions better custom for your wallet and your life-style.
                You can edit them in your profile info, eny time you want.</p>
            <div @click="currentStep = 1">
                <BaseButton>Start Telling</BaseButton>
            </div>
        </div>
    </template>
</template>

<script setup>
import { storeToRefs } from "pinia";

const props = defineProps({
    isWellcomeShowed: {
        default: true
    }
})

const store = useStepsStore()
const { currentStep } = storeToRefs(store)
</script>