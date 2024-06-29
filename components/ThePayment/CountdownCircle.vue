<template>
    <div>
        <div class="countdown-circle relative" v-if="remainTime > 0">
            <span class="absolute top-9 left-6">
                {{ minutes.toString().padStart(2, '0') }} : {{ seconds.toString().padStart(2, '0') }}
            </span>
            <svg class="timer-svg" viewBox="0 0 36 36" style="transform:rotate(270deg)">
                <circle class="timer-background" cx="18" cy="18" r="16" fill="none" />
                <circle class="timer-progress stroke-Primary" cx="18" cy="18" r="16" ref="progressBar" fill="none"
                    stroke-width="4" />
            </svg>
        </div>
        <div v-else>Time Over! </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import useUiStore from '~~/stores/ui';

// Define your countdown logic here
const startTime = ref(new Date().getTime());
const endTime = ref(startTime.value + 600000); // 10 minute from now
const progressBar = ref(null);
const remainTime = ref('')
const ui = useUiStore()

onMounted(() => {
    const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        if (currentTime >= endTime.value) {
            clearInterval(interval);
        } else {
            const progress = ((endTime.value - currentTime) / (endTime.value - startTime.value)) * 100;
            progressBar.value.style.strokeDasharray = `${progress} 100`;
        }
        remainTime.value = Math.floor((endTime.value - currentTime) / 1000)
    }, 1000);

});

const minutes = computed(() => Math.floor(remainTime.value / 60))
const seconds = computed(() => remainTime.value % 60)

</script>

<style scoped>
.timer-svg {
    width: 100px;
    height: 100px;
    margin: auto;
}

.timer-background,
.timer-progress {
    fill: none;
    stroke-width: 4;
}

.timer-progress {
    stroke-dasharray: 100 100;
    stroke-linecap: round;
}
</style>