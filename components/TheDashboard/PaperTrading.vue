<template>
    <section class="my-6">
        <header class="flex justify-between items-center">
            <h2 class="xl:text-[26px] lg:text-[22px] text-lg text-Gray-b6">Paper Trading</h2>
            <NuxtLink to="/channels">
                <BaseButton type="secondary">Channel List</BaseButton>
            </NuxtLink>
        </header>
        <div class="my-6 lg:p-8 p-4 rounded-lg bg-Gray-b2">
            <div class="flex justify-between items-center border-b-[1px] border-Gray-b1 pb-4">
                <p class="md:text-base text-sm font-normal">Name of Channel</p>
                <el-dropdown trigger="click" popper-class="notifications">
                    <span class="el-dropdown-link">
                        <Icon name="more" />
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item class="flex items-center gap-1">
                                <Icon name="visibility" />
                                <span>Show Detail</span>
                            </el-dropdown-item>
                            <el-dropdown-item class="flex items-center gap-1">
                                <Icon name="folder-up" />
                                <span>UnSubscribe</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <div class="mt-6 grid grid-cols-4 items-center gap-6">
                <div class="lg:col-span-3 col-span-4">
                    <el-collapse class="block lg:hidden" v-model="activeAccordion1" accordion>
                        <el-collapse-item name="1">
                            <template #title>Filters</template>
                            <div class="flex flex-wrap md:flex-row flex-col gap-3">
                                <div class="min-w-[128px] max-w-[128px] flex flex-col gap-2">
                                    <label class="text-sm text-Gray-b4 font-normal">Start Balance</label>
                                    <el-input v-model="filter.balance" placeholder="Start Balance"
                                        input-style="color:#FFFFFF;font-size:16px" />
                                </div>
                                <div class="min-w-[128px] flex flex-col gap-2">
                                    <label class="text-sm text-Gray-b4 font-normal">Duration</label>
                                    <ClientOnly>
                                        <el-date-picker v-model="filter.duration" type="daterange" range-separator="-"
                                            start-placeholder="Start date" end-placeholder="End date" />
                                    </ClientOnly>
                                </div>
                                <div class="min-w-[128px] max-w-[128px] flex flex-col gap-2">
                                    <label class="text-sm text-Gray-b4 font-normal">Max Assets</label>
                                    <el-select v-model="filter.maxAsset" placeholder="Max Assets">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </div>
                                <div class="min-w-[128px] max-w-[128px] flex flex-col justify-end gap-2">
                                    <button class="px-2 bg-Blue text-Gray-b6 rounded-lg h-[32px]">Execute</button>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                    <div class=" flex-wrap md:flex-row flex-col gap-3 lg:flex hidden">
                        <div class="min-w-[128px] max-w-[128px] flex flex-col gap-2">
                            <label class="text-sm text-Gray-b4 font-normal">Start Balance</label>
                            <el-input v-model="filter.balance" placeholder="Start Balance"
                                input-style="color:#FFFFFF;font-size:16px" />
                        </div>
                        <div class="min-w-[128px] flex flex-col gap-2">
                            <label class="text-sm text-Gray-b4 font-normal">Duration</label>
                            <ClientOnly>
                                <el-date-picker v-model="filter.duration" type="daterange" range-separator="-"
                                    start-placeholder="Start date" end-placeholder="End date" />
                            </ClientOnly>
                        </div>
                        <div class="min-w-[128px] max-w-[128px] flex flex-col gap-2">
                            <label class="text-sm text-Gray-b4 font-normal">Max Assets</label>
                            <el-select v-model="filter.maxAsset" placeholder="Max Assets">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </div>
                        <div class="min-w-[128px] max-w-[128px] flex flex-col justify-end gap-2">
                            <button class="px-2 bg-Blue text-Gray-b6 rounded-lg h-[32px]">Execute</button>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-6 mt-6">
                        <div class="lg:col-span-1 col-span-4">
                            <div>
                                <highchart :options="paperTradingChartOptions" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <div class="flex justify-between items-center">
                                    <span class="text-base text-Gray-b6 font-medium">Balance</span>
                                    <span class="text-base text-Primary font-medium">1000$</span>
                                </div>
                                <div v-for="(item, index) in chartLables" :key="index"
                                    class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <img :src="'/icons/' + item.icon + '.svg'"
                                            class="w-8 h-8 rounded-lg object-fill bg-Gray-b3 p-2 mr-2" />
                                        <div class="w-2 h-2 rounded-full" :style="`background-color:${item.color}`">
                                        </div>
                                        <span class="text-sm font-normal text-Gray-b3">{{ item.label }}</span>
                                    </div>
                                    <p class="text-Gray-b6 font-medium text-[14px]">{{ item.value }} %</p>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-3 col-span-4">
                            <div>
                                <highchart :options="paperTradingChartOptions2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-1 col-span-4">
                    <BaseBalanceChange :state="balanceChanges" />
                </div>
            </div>
        </div>
        <div class="my-6 lg:p-8 p-4 rounded-lg bg-Gray-b2">
            <div class="flex justify-between items-center border-b-[1px] border-Gray-b1 pb-4">
                <p class="md:text-base text-sm font-normal">Name of Channel</p>
                <el-dropdown trigger="click" popper-class="notifications">
                    <span class="el-dropdown-link">
                        <Icon name="more" />
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item class="flex items-center gap-1">
                                <Icon name="visibility" />
                                <span>Show Detail</span>
                            </el-dropdown-item>
                            <el-dropdown-item class="flex items-center gap-1">
                                <Icon name="folder-up" />
                                <span>UnSubscribe</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
            <div class="mt-6 grid grid-cols-4 items-center gap-6">
                <div class="lg:col-span-3 col-span-4" :key="counter">
                    <el-collapse class="block lg:hidden" v-model="activeAccordion2" accordion @change="counter++">
                        <el-collapse-item name="1">
                            <template #title>Filters</template>
                            <div class="flex flex-wrap md:flex-row flex-col gap-3">
                                <div class="min-w-[128px] max-w-[128px] flex flex-col gap-2">
                                    <label class="text-sm text-Gray-b4 font-normal">Start Balance</label>
                                    <el-input v-model="filter.balance" placeholder="Start Balance"
                                        input-style="color:#FFFFFF;font-size:16px" />
                                </div>
                                <div class="min-w-[128px] flex flex-col gap-2">
                                    <label class="text-sm text-Gray-b4 font-normal">Duration</label>
                                    <ClientOnly>
                                        <el-date-picker v-model="filter.duration" type="daterange" range-separator="-"
                                            start-placeholder="Start date" end-placeholder="End date" />
                                    </ClientOnly>
                                </div>
                                <div class="min-w-[128px] max-w-[128px] flex flex-col gap-2">
                                    <label class="text-sm text-Gray-b4 font-normal">Max Assets</label>
                                    <el-select v-model="filter.maxAsset" placeholder="Max Assets">
                                        <el-option v-for="item in options" :key="item.value" :label="item.label"
                                            :value="item.value" />
                                    </el-select>
                                </div>
                                <div class="min-w-[128px] max-w-[128px] flex flex-col justify-end gap-2">
                                    <button class="px-2 bg-Blue text-Gray-b6 rounded-lg h-[32px]">Execute</button>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                    <div class=" flex-wrap md:flex-row flex-col gap-3 lg:flex hidden">
                        <div class="min-w-[128px] max-w-[128px] flex flex-col gap-2">
                            <label class="text-sm text-Gray-b4 font-normal">Start Balance</label>
                            <el-input v-model="filter.balance" placeholder="Start Balance"
                                input-style="color:#FFFFFF;font-size:16px" />
                        </div>
                        <div class="min-w-[128px] flex flex-col gap-2">
                            <label class="text-sm text-Gray-b4 font-normal">Duration</label>
                            <ClientOnly>
                                <el-date-picker v-model="filter.duration" type="daterange" range-separator="-"
                                    start-placeholder="Start date" end-placeholder="End date" />
                            </ClientOnly>
                        </div>
                        <div class="min-w-[128px] max-w-[128px] flex flex-col gap-2">
                            <label class="text-sm text-Gray-b4 font-normal">Max Assets</label>
                            <el-select v-model="filter.maxAsset" placeholder="Max Assets">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </div>
                        <div class="min-w-[128px] max-w-[128px] flex flex-col justify-end gap-2">
                            <button class="px-2 bg-Blue text-Gray-b6 rounded-lg h-[32px]">Execute</button>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-6 mt-6">
                        <div class="lg:col-span-1 col-span-4">
                            <div>
                                <highchart :options="paperTradingChartOptions" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <div class="flex justify-between items-center">
                                    <span class="text-base text-Gray-b6 font-medium">Balance</span>
                                    <span class="text-base text-Primary font-medium">1000$</span>
                                </div>
                                <div v-for="(item, index) in chartLables" :key="index"
                                    class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <img :src="'/icons/' + item.icon + '.svg'"
                                            class="w-8 h-8 rounded-lg object-fill bg-Gray-b3 p-2 mr-2" />
                                        <div class="w-2 h-2 rounded-full" :style="`background-color:${item.color}`">
                                        </div>
                                        <span class="text-sm font-normal text-Gray-b3">{{ item.label }}</span>
                                    </div>
                                    <p class="text-Gray-b6 font-medium text-[14px]">{{ item.value }} %</p>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-3 col-span-4">
                            <div>
                                <highchart :options="paperTradingChartOptions2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-1 col-span-4">
                    <BaseBalanceChange :state="balanceChanges" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Icon from '../Icon.vue';
const { paperTradingChartOptions, paperTradingChartOptions2 } = useCharts();

const activeAccordion1 = ref(null)
const activeAccordion2 = ref(null)
const counter = ref(0)
const filter = ref({
    balance: 0, duration: '', maxAsset: 3
})
const options = [
    {
        value: 1,
        label: 1,
    },
    {
        value: 2,
        label: 2,
    },
    {
        value: 3,
        label: 3,
    },
]
const chartLables = [
    {
        label: "Bitcoin",
        icon: 'bitcoin',
        value: 40,
        color: "#2C80FF"
    },
    {
        label: "Ethereum",
        icon: 'eth',
        value: 10,
        color: "#9264FF"
    },
    {
        label: "XRP",
        icon: 'XRP',
        value: 20,
        color: "#D1963C"
    },
    {
        label: "Dash",
        icon: 'eth',
        value: 30,
        color: "#1EC0D9"
    }
]
const balanceChanges = [
    {
        firstCol: {
            label: "XRP", value: "312", caption: "Nov, 07, 2018"
        },
        secondCol: {
            label: +30, value: "312", caption: "Nov, 07, 2018"
        }
    },
    {
        firstCol: {
            label: "ETH", value: "312", caption: "Nov, 07, 2018"
        },
        secondCol: {
            label: -20, value: "312", caption: "Nov, 07, 2018"
        }
    },
    {
        firstCol: {
            label: "XRP", value: "312", caption: "Nov, 07, 2018"
        },
        secondCol: {
            label: +30, value: "312", caption: "Nov, 07, 2018"
        }
    },
    {
        firstCol: {
            label: "ETH", value: "312", caption: "Nov, 07, 2018"
        },
        secondCol: {
            label: -20, value: "312", caption: "Nov, 07, 2018"
        }
    },
]
</script>