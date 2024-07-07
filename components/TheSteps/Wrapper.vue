<template>
    <div class="flex items-start justify-center max-h-[500px] h-full">
        <template v-if="currentStep == 0">
            <TheStepsSteps0 :isWellcomeShowed="isWellcomeShowed" />
        </template>
        <template v-else-if="currentStep == 1">
            <TheStepsSteps1 />
        </template>
    </div>
</template>

<script setup>
import { useStepsStore } from '@/stores/steps.js'
import { storeToRefs } from "pinia";

const store = useStepsStore()
const { currentStep } = storeToRefs(store)

const isWellcomeShowed = ref(true)
onMounted(() => {
    setTimeout(() => {
        isWellcomeShowed.value = !isWellcomeShowed.value
    }, 3000);
})
</script>