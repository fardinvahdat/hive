<template>
    <div class="lg:p-8 p-4 rounded-lg bg-Gray-b2">
        <header class="flex justify-between items-center">
            <h4 class="text-base font-medium text-Gray-b6">Big Movers</h4>
            <div class="flex items-center gap-1">
                <button class=" hover:stroke-Gray-b6" :class="mode == 1 ? 'stroke-Gray-b6' : 'stroke-Gray-b4'"
                    @click="mode = 1">
                    <Icon name="column-up" />
                </button>
                <button class=" hover:stroke-Gray-b6" :class="mode == 2 ? 'stroke-Gray-b6' : 'stroke-Gray-b4'"
                    @click="mode = 2">
                    <Icon name="column-down" />
                </button>
                <button>
                    <Icon name="more-horizental" />
                </button>
            </div>
        </header>
        <main>
            <div class="flex justify-between gap-2">
                <div class="flex flex-col gap-6"
                    v-for="(item, index) in mode == 1 ? [...bigMovers] : [...bigMovers].reverse()"
                    :key="index">
                    <div class="h-[160px] w-10 flex flex-col justify-end">
                        <div class="text-xs text-center " :class="mode == 1 ? 'text-Greeen' : 'text-Red'">{{
                    item.value }}%
                        </div>
                        <div class=" rounded-t-lg w-full flex items-center justify-center text-xs"
                            :class="mode == 1 ? 'bg-Greeen' : 'bg-Red'"
                            :style="`height:${(item.value / totalValue) * 100}%`">
                        </div>
                    </div>
                    <div>
                        <img :src="item.icon" class="h-10 w-10 rounded-xl brightness-50	hover:brightness-100"
                            :style="`background:${item.background}`" :alt="item.label">
                        <p class="text-Gray-b4 text-xs text-center mt-2">{{ item.label }}</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
const bigMovers = ref([
    {
        label: 'CGC',
        background: "#2c2c2c",
        value: 17.11,
        icon: '/icons/CGC.svg'
    },
    {
        label: 'NVAX',
        background: "#236092",
        value: 7.87,
        icon: '/icons/NVAX.svg'
    },
    {
        label: 'TSLA',
        background: "#e82127",
        value: 5.15,
        icon: '/icons/TSLA.svg'
    },
    {
        label: 'NVDA',
        background: "#76b900",
        value: 4.76,
        icon: '/icons/NVDA.svg'
    },
    {
        label: 'AMD',
        background: "#2c2c2c",
        value: 2.83,
        icon: '/icons/AMD.svg'
    },
])
const mode = ref(1)
//mode:1=>up
//mode:2=>down
const totalValue = computed(() => bigMovers.value.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0))
</script>