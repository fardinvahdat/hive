<template>
    <div class="flex lg:items-start items-center justify-center flex-col lg:max-h-[500px] h-full lg:p-8 p-4 w-full">
        <div v-if="!isWellcomeShowed"><img src="/logo.svg" alt="hive" class="max-w-[200px]" /></div>
        <TheStepsStepsStepper class="my-6" v-if="!isWellcomeShowed" />
        <template v-if="currentStep == 0">
            <TheStepsSteps0 :isWellcomeShowed="isWellcomeShowed" />
        </template>
        <template v-else-if="currentStep == 1">
            <TheStepsSteps1 :state="stepsOption[0]" />
        </template>
        <template v-else-if="currentStep == 2">
            <TheStepsSteps1 :state="stepsOption[1]" />
        </template>
        <template v-else-if="currentStep == 3">
            <TheStepsSteps1 :state="stepsOption[2]" />
        </template>
        <template v-else-if="currentStep == 4">
            <TheStepsSteps1 :state="stepsOption[3]" />
        </template>
        <template v-else-if="currentStep == 5">
            <TheStepsSteps1 :state="stepsOption[4]" />
        </template>
        <template v-else-if="currentStep == 6">
            <TheStepsSteps1 :state="stepsOption[5]" />
        </template>
        <template v-else-if="currentStep == 7">
            <TheStepsSteps1 :state="stepsOption[6]" />
        </template>
        <template v-else-if="currentStep == 8">
            <TheStepsSteps1 :state="stepsOption[7]" />
        </template>
        <template v-else-if="currentStep == 9">
            <TheStepsSteps1 :state="stepsOption[8]" />
        </template>

        
        <footer class="flex items-center gap-6 justify-end h-10 w-full">
            <template v-if="currentStep != 0">
                <button class="text-Gray-b5 font-medium text-sm border-none outline-none"
                    @click="handlePrevStep">Previous</button>
                <button class="text-Gray-b5 font-medium text-sm border-none outline-none"
                    @click="handleNextStep">Next</button>
            </template>

        </footer>
    </div>
</template>

<script setup>
import { useStepsStore } from '@/stores/steps.js'
import { storeToRefs } from "pinia";

const store = useStepsStore()
const { currentStep, stepsOption } = storeToRefs(store)

const isWellcomeShowed = ref(true)
onMounted(() => {
    setTimeout(() => {
        isWellcomeShowed.value = !isWellcomeShowed.value
    }, 3000);
})
const handlePrevStep = () => {
    currentStep.value > 0 && currentStep.value--
    window.scrollTo(0, 0);
}
const handleNextStep = () => {
    currentStep.value < 9 && currentStep.value++
    window.scrollTo(0, 0);
}
</script>