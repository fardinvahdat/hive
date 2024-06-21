<template>
    <section class="my-6">
        <header class="flex justify-between items-center">
            <h2 class="text-2xl font-medium">Paper Trading</h2>
            <BaseButton type="secondary">Channel List</BaseButton>
        </header>
        <div class="my-6 p-8 rounded-lg bg-Gray-b2">
            <div class="flex justify-between items-center border-b-[1px] border-Gray-b1 pb-4">
                <p class="text-base font-normal">Name of Channel</p>
                <el-dropdown trigger="click">
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
            <div class="mt-6 rounded-xl grid grid-cols-4 gap-6">
                <div class="col-span-3"></div>
                <div class="col-span-1">
                    <BaseBalanceChange :state="balanceChanges" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
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