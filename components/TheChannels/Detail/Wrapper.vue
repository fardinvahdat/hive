<template>
    <div>
        <BaseBreadcrumb :state="breadcrumbs" />
        <header class="bg-Gray-b2 rounded-lg lg:p-8 p-4 grid grid-cols-3 gap-6 my-6">
            <div class="lg:col-span-1 col-span-3 flex flex-col gap-3 items-center">
                <img class="h-[80px] w-full"
                    src="https://s3-alpha-sig.figma.com/img/a444/3f11/d50d12c93c36bc15631f20ae3298ec23?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=odcxHKsAUMwVdxbikkK6MZbgprKxU6bEWjPYglOX8C83Rb9h06X2QpOwau8TLUvjTBGK-EahCo2jTNAwCJm-tPVAn6bfXH8rHviyfzg8je5zDoOSLM0Fd0tb4C5uB1vcNiaq7axd5-kRiDdItP5GaWTW7-8m3sqvvxixyoajzJbdYTAtQUFhasdo6N18hBfyhtjPBNhiWYUrD64FncYDB~Ab-XykYXp43CYO8FSwtDuqdsYz4nH8vxRNO65xqxCd1cGgclL9YR49BQkyOvG6d3yowtdAsVs-iL4~e7N9GNM~QphveyfviV1WpkPpaheMgtXCPMm~jan2tTjZzUtNcg__" />
                <div class="text-center">
                    <h4 class="lg:text-xl text-lg text-Gray-b6 font-medium">{{ state.title }}</h4>
                    <p class="lg:text-base text-sm text-Gray-b4 font-normal">{{ state.caption }}</p>
                </div>
                <div class="text-xl text-Primary font-medium">
                    {{ state.price == 0 ? 'Free' : state.price }}
                    <span v-if="state.price" class="text-xs">$</span>
                </div>
                <BaseButton class="w-full !rounded-lg" :type="state.isSubscribed ? 'primary' : 'primary-outline'"
                    @click="state.isSubscribed = !state.isSubscribed">{{
            state.isSubscribed ? 'Subscribed' :
                'Subscrib' }}</BaseButton>
            </div>
            <div class="lg:col-span-2 col-span-3 lg:p-4">
                <div class="flex justify-between items-center lg:flex-row flex-col lg:gap-0 gap-6">
                    <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                        Market Base
                        <span class="text-Gray-b6 text-base">{{ state.marketBase }}</span>
                    </div>
                    <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                        Num OF SUB
                        <span class="text-Gray-b6 text-base">{{ state.numOFSUB }}</span>
                    </div>
                    <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                        Risk
                        <span class="text-Gray-b6 text-base">{{ state.risk }}</span>
                    </div>
                    <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                        Market Base
                        <span class="rounded-2xl bg-Blue px-2 py-[2px] text-Gray-b6">
                            Spot
                        </span>
                    </div>
                    <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                        Last Profit
                        <span class="text-base"
                            :class="state.lastProfit > 0 ? 'text-Greeen' : state.lastProfit < 0 ? 'text-Red' : ''">
                            {{ state.lastProfit }}%
                        </span>
                    </div>
                </div>
                <p class="font-normal text-sm text-Gray-b4 mt-8">Description</p>
                <p class="font-normal text-sm text-Gray-b4 mt-4 text-justify">Lorem ipsum dolor sit amet consectetur
                    adipisicing
                    elit.
                    Consequatur labore aperiam natus. Qui quas quaerat commodi, id similique nesciunt, iusto veniam ab
                    nostrum assumenda sunt incidunt facilis! Est tenetur quaerat sunt a ea quae quas, dolore iste
                    reprehenderit reiciendis, voluptatem necessitatibus labore cupiditate! Porro eligendi delectus id
                    voluptatibus, sunt fugiat.</p>
            </div>
        </header>
        <section class="bg-Gray-b2 rounded-lg lg:p-8 p-4 my-6">
            <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane label="Back Testing" name="first">
                    <TheChannelsDetailBackTesting />
                </el-tab-pane>
                <el-tab-pane label="Paper Testing" name="second">Paper Testing</el-tab-pane>
            </el-tabs>
        </section>
    </div>
</template>

<script setup>
import { useChannelsStore } from '@/stores/channels'
const { channels } = useChannelsStore()
const route = useRoute()
const breadcrumbs = computed(() => [
    {
        label: "Channels", route: "/channels"
    },
    {
        label: `${state?.title}`, route: route.fullPath
    }
])
const state = channels.filter((item) => item.id == route.params.id)[0]
const activeName = ref('first')
</script>