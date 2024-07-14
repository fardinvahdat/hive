<template>
    <div class="h-[60px] flex justify-end items-center gap-6 sticky -top-4 lg:bg-Gray-b1 z-40 lg:pl-0 pl-6">
        <ClientOnly>
            <el-dropdown trigger="click" popper-class="notifications" size="large">
                <span class="el-dropdown-link">
                    <img src="/public/icons/notification.svg" class="h-6 w-6" />
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="(item, index) in notifications" :key="index">{{ item.text
                            }}</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </ClientOnly>
        <NuxtLink to="/login"><img src="/icons/avatar.svg" class="h-10 w-10" /></NuxtLink>
    </div>
</template>
<script setup>
const notifications = ref([
    {
        text: "Action 1"
    },
    {
        text: "Action 2"
    },
    {
        text: "Action 3"
    }
])
</script>