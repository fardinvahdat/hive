<template>
    <section class="my-6">
        <header class="flex justify-between items-center">
            <h2 class="xl:text-[26px] lg:text-[22px] text-lg text-Gray-b6">My Channel</h2>
            <NuxtLink to="/channels">
                <BaseButton type="secondary">Channel List</BaseButton>
            </NuxtLink>

        </header>
        <div class="my-6 p-8 rounded-lg bg-Gray-b2">
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
const myChannel = [
    {
        Name: {
            relatedHeaderId: 1,
            type: "with-image",
            align: "end",
            text: "XRP",
            image: "/icons/eth.svg",
        },
        Order: {
            relatedHeaderId: 2,
            type: "simple",
            align: "end",
            value: "Sell",
            icon: "up",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        Trading: {
            relatedHeaderId: 3,
            type: "simple",
            align: "end",
            value: "312",
            icon: "",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        Closing: {
            relatedHeaderId: 4,
            type: "simple",
            align: "end",
            value: "Nov, 07, 2018",
            icon: "",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        "Last Action": {
            relatedHeaderId: 5,
            type: "simple",
            align: "end",
            value: "Nov, 07, 2018",
            icon: "up",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        Profit: {
            relatedHeaderId: 6,
            type: "simple",
            align: "end",
            value: "+30%",
            icon: "",
            caption: "",
            valueColor: 2,
            captionColor: 1,
        },
    },
    {
        Name: {
            relatedHeaderId: 1,
            type: "with-image",
            align: "end",
            text: "XRP",
            image: "/icons/eth.svg",
        },
        Order: {
            relatedHeaderId: 2,
            type: "simple",
            align: "end",
            value: "Buy",
            icon: "down",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        Trading: {
            relatedHeaderId: 3,
            type: "simple",
            align: "end",
            value: "178",
            icon: "",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        Closing: {
            relatedHeaderId: 4,
            type: "simple",
            align: "end",
            value: "Nov, 07, 2018",
            icon: "",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        "Last Action": {
            relatedHeaderId: 5,
            type: "simple",
            align: "end",
            value: "Nov, 07, 2018",
            icon: "down",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        Profit: {
            relatedHeaderId: 6,
            type: "simple",
            align: "end",
            value: "-30%",
            icon: "",
            caption: "",
            valueColor: 3,
            captionColor: 1,
        },
    },
    {
        Name: {
            relatedHeaderId: 1,
            type: "with-image",
            align: "end",
            text: "XRP",
            image: "/icons/eth.svg",
        },
        Order: {
            relatedHeaderId: 2,
            type: "simple",
            align: "end",
            value: "Sell",
            icon: "up",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        Trading: {
            relatedHeaderId: 3,
            type: "simple",
            align: "end",
            value: "312",
            icon: "",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        Closing: {
            relatedHeaderId: 4,
            type: "simple",
            align: "end",
            value: "Nov, 07, 2018",
            icon: "",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        "Last Action": {
            relatedHeaderId: 5,
            type: "simple",
            align: "end",
            value: "Nov, 07, 2018",
            icon: "up",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        Profit: {
            relatedHeaderId: 6,
            type: "simple",
            align: "end",
            value: "+30%",
            icon: "",
            caption: "",
            valueColor: 2,
            captionColor: 1,
        },
    },
    {
        Name: {
            relatedHeaderId: 1,
            type: "with-image",
            align: "end",
            text: "XRP",
            image: "/icons/eth.svg",
        },
        Order: {
            relatedHeaderId: 2,
            type: "simple",
            align: "end",
            value: "Buy",
            icon: "down",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        Trading: {
            relatedHeaderId: 3,
            type: "simple",
            align: "end",
            value: "178",
            icon: "",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        Closing: {
            relatedHeaderId: 4,
            type: "simple",
            align: "end",
            value: "Nov, 07, 2018",
            icon: "",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        "Last Action": {
            relatedHeaderId: 5,
            type: "simple",
            align: "end",
            value: "Nov, 07, 2018",
            icon: "down",
            caption: "",
            valueColor: 0,
            captionColor: 1,
        },
        Profit: {
            relatedHeaderId: 6,
            type: "simple",
            align: "end",
            value: "-30%",
            icon: "",
            caption: "",
            valueColor: 3,
            captionColor: 1,
        },
    },
]
const headers = [
    { label: "Name", sortable: false, align: "start", id: 1 },
    {
        label: "Order",
        sortable: true,
        sortType: 1,
        align: "end",
        id: 2,
    },
    { label: "Trading", sortable: true, sortType: 1, align: "end", id: 3 },
    { label: "Closing", sortable: true, sortType: 1, align: "end", id: 4 },
    { label: "Last Action", sortable: true, sortType: 1, align: "end", id: 5 },
    { label: "Profit", sortable: true, sortType: 1, align: "end", id: 6 },
]
</script><style lang="scss">
.el-input__wrapper,
.el-select__wrapper {
    @apply bg-Gray-b1 border-0 shadow-none hover:shadow-none active:shadow-none focus:shadow-none text-Gray-b6;

    &.is-focus,
    &.is-hovering:not(.is-focused),
    &.is-focused {
        box-shadow: 0 0 0 1px #f8bf2d76 inset;
    }


}

.el-date-editor.el-input__wrapper {
    @apply shadow-none hover:shadow-none
}

.el-range-editor.is-active:hover, .el-range-editor.is-active {

    box-shadow: 0 0 0 1px #f8bf2d76 inset;
}

.el-date-table td.today .el-date-table-cell__text {
    @apply text-Gray-b1
}

.el-date-table td.end-date .el-date-table-cell__text,
.el-date-table td.start-date .el-date-table-cell__text {
    @apply bg-Primary
}

.el-date-editor .el-range-input, .el-date-editor .el-range-separator, .el-select__placeholder {
    @apply text-Gray-b6
}

.el-date-table td.available:hover, .el-select-dropdown__item.is-selected {
    @apply text-Primary
}

.highcharts-credits {
    @apply hidden
}

.el-collapse-item__header, .el-collapse-item__wrap {
    @apply bg-transparent text-Gray-b6 text-base
}

.el-collapse {
    @apply border-y-0
}

.el-date-editor.el-input__wrapper {
    @apply max-w-[300px]
}

.el-loading-spinner .path, .el-loading-spinner .el-loading-text {
    @apply stroke-Primary text-Primary #{!important};
}
</style>