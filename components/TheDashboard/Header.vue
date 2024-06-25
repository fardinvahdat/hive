<template>
    <div class="grid lg:grid-cols-3 gap-4">
        <div class="flex flex-col lg:gap-4 gap-1">
            <h2 class="font-medium xl:text-[34px] lg:text-[24px] text-lg text-Gray-b6 lg:my-1">Dashboard</h2>
            <p class="lg:text-base text-sm text-Gray-b6 font-light">Workspace Board</p>
            <div class="flex gap-2">
                <Icon name="sell" />
                <Icon name="buy" />
                <Icon name="order" />
            </div>
        </div>
        <TheDashboardWidget v-for="(item, index) in widgets" :key="index" :state="item" />
    </div>
</template>

<script setup>

const widgets = ref([
    {
        label: "Total balance",
        value: "4 324.53",
        exchange: "- $ 234.64",
        percent: -1.12,
        icon: 'evolution'
    },
    {
        label: "Your Today revenue",
        value: "4 324.53",
        exchange: "- $ 234.64",
        percent: -1.12,
        icon: 'evolution-2'
    },
])
</script>