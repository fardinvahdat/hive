<template>
    <div class="flex flex-col justify-center gap-6 w-full">
        
        <h6 class="lg:text-xl text-lg text-Gray-b6 font-medium">How much is your annual salary?</h6>
        <div class="grid lg:grid-cols-5 md:grid-cols-2 items-center lg:gap-6 gap-2">
            <div v-for="(item, index) in state.options" :key="index"
                class="lg:p-4 p-2 rounded-xl border-2 cursor-pointer lg:h-[131px] h-[100px] flex flex-col justify-between"
                style="background: url(/img/steps-bg.svg) right top / 25% no-repeat #1E2429;"
                :class="item.value == state.value ? 'border-Primary' : 'border-transparent'"
                @click="state.value = item.value">
                <Icon :name="item.value == state.value ? item.icon + '-active' : item.icon" />
                <p class="text-sm font-normal mt-4 h-[40px] line-clamp-2"
                    :class="item.value == state.value ? 'text-Primary' : 'text-Gray-b3'">{{
                item.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    state: {
        default: {
            step: 1,
            value: null,
            options: []
        }
    }
})
</script>