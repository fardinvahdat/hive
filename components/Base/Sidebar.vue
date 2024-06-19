<template>
    <div class="h-screen w-[224px] bg-Gray-b2 hidden lg:block">
        <div class="h-[150px] flex items-center">
            <img src="/logo.svg" />
        </div>
        <ul class="flex flex-col gap-2 h-full pl-5">
            <li v-for="(item, index) in list" :key="index" class=" h-[50px]">
                <NuxtLink class="h-full w-full  flex items-center gap-3 text-[14px] " :to="item.route"
                    :class="route.fullPath.includes(item.route) ? 'text-Gray-b6 font-medium' : 'text-Gray-b3 font-normal'">
                    <div class="h-full w-[20px] flex items-center">
                        <Icon v-if="route.fullPath.includes(item.route)" :name="item.icon + '-active'"></Icon>
                        <Icon v-else :name="item.icon"></Icon>
                    </div>
                    {{
                    item.label }}
                </NuxtLink>
            </li>
        </ul>
    </div>
    <div class="lg:hidden block">
        <ClientOnly>
            <el-drawer v-model="drawer">
                <template #header>
                    <h4>set title by slot</h4>
                </template>
                test
                <template #footer>
                    <div style="flex: auto">
                        <el-button @click="cancelClick">cancel</el-button>
                        <el-button type="primary" @click="confirmClick">confirm</el-button>
                    </div>
                </template>
            </el-drawer>
        </ClientOnly>
    </div>
</template>

<script setup>
import { useSidebarStore } from '@/stores/sidebar'

// access the `store` variable anywhere in the component ✨
const { list } = useSidebarStore()

const route = useRoute()

const drawer = ref(false)
</script>