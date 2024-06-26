<template>
    <section class="my-6">
        <header class="flex justify-between items-center">
            <h2 class="xl:text-[26px] lg:text-[22px] text-lg text-Gray-b6">My Channel</h2>
            <NuxtLink to="/channels">
                <BaseButton type="secondary">Channel List</BaseButton>
            </NuxtLink>

        </header>
        <div class="my-6 lg:p-8 p-4 rounded-lg bg-Gray-b2">
            <div class="flex justify-between items-center border-b-[1px] border-Gray-b1 pb-4">
                <p class="md:text-base text-sm font-normal">Name of Channel</p>
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
            <div class="mt-6 border-[1px] rounded-xl border-Gray-b1">
                <BaseTable :headers="headers" :state="myChannel" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { useMyChannelsStore } from '@/stores/my-channels'

const { myChannel, headers } = useMyChannelsStore()
</script>