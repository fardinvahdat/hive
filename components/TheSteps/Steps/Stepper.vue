<template>
    <div class="flex gap-2 items-center">
        <button v-for="(item, index) in 10" :key="index + currentStep"
            class="min-w-[30px] h-[35px] bg-no-repeat bg-contain flex items-center justify-center text-sm"
            :style="currentStep == index ? 'background-image:url(/img/polygan-active.svg)' : 'background-image:url(/img/polygan.svg)'"
            :class="currentStep == index ? 'text-Gray-b1' : ' text-Gray-b4'" @click="currentStep = index">
            {{ index }}
        </button>
    </div>
</template>

<script setup>
import { useStepsStore } from '@/stores/steps.js'
import { storeToRefs } from "pinia";

const store = useStepsStore()
const { currentStep } = storeToRefs(store)
</script>