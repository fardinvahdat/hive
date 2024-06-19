<template>
    <div class="h-screen min-w-[224px] max-w-[224px] w-full bg-Gray-b2 hidden lg:block">
        <div class="h-[150px] flex items-center">
            <img src="/logo.svg" />
        </div>
        <ul class="flex flex-col gap-2 h-[calc(100vh-150px)] pl-5">
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
            <el-drawer v-model="drawer" @before-close="drawer = false" lock-scroll size="100%" class="bg-Gray-b2">
                <template #header>
                    <img src="/logo.svg" class="max-w-fit" />
                </template>
                <ul class="flex flex-col gap-2 h-full pl-5">
                    <li v-for="(item, index) in list" :key="index" class=" h-[50px]">
                        <NuxtLink class="h-full w-full  flex items-center gap-3 text-[14px] " @click="drawer = false"
                            :to="item.route"
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
            </el-drawer>
        </ClientOnly>
        <div class="flex items-center justify-between w-full py-4  h-[60px]">
            <img src="/logo.svg" />
            <button @click="drawer = true" class="mr-6">
                <Icon name="menu" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { useSidebarStore } from '@/stores/sidebar'

// access the `store` variable anywhere in the component ✨
const { list } = useSidebarStore()

const route = useRoute()

const drawer = ref(false)
</script>
<style lang="scss">
.el-drawer__header {
    justify-content: space-between;
}

.el-drawer__close-btn {
    max-width: fit-content;
}

.el-drawer {
    @apply bg-Gray-b2
}
</style>