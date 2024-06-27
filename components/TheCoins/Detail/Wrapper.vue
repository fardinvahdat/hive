<template>
    <div>
        <BaseBreadcrumb :state="breadcrumbs" />
        <TheCoinsDetailHeader :links="links" :state="state" />
        <section class="bg-Gray-b2 rounded-lg lg:p-8 p-4 my-6">
            <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane label="Charts" name="first">
                    <TheCoinsDetailCharts />
                </el-tab-pane>
                <el-tab-pane label="News" name="second">News</el-tab-pane>
            </el-tabs>
        </section>
    </div>
</template>

<script setup>
import { useCoinsStore } from '@/stores/coins'

const { coins } = useCoinsStore()
const route = useRoute()
const breadcrumbs = computed(() => [
    {
        label: "Coins", route: "/coins"
    },
    {
        label: `${state?.Name.value}`, route: route.fullPath
    }
])
const state = coins.filter((item) => item.Name.id == route.params.id)[0]
const links = [
    {
        text: "Website",
        link: "",
        icon: 'internet'
    },
    {
        text: "Explore",
        link: "",
        icon: 'internet-explorer'
    },
    {
        text: "Message Board",
        link: "",
        icon: 'bxs-message-detail'
    },
    {
        text: "Source Code",
        link: "",
        icon: 'bx-code-block'
    },
    {
        text: "Technical Documentation",
        link: "",
        icon: 'bxs-file-blank'
    },
]
const activeName = ref('first')
</script>