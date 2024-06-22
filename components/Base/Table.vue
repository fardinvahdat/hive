<template>
    <div class="rounded-xl">
        <div class="flex flex-col overflow-auto max-h-[calc(100vh-250px)] rounded-xl">

            <!-- header  -->

            <header class="min-w-fit w-full flex z-40 sticky top-0">

                <!-- first cell  -->

                <div
                    class="px-4 bg-Gray-b1 rounded-tl-xl h-[56px] flex items-center justify-start lg:min-w-[230px] w-full lg:max-w-[230px] min-w-[150px] max-w-[150px] sticky left-0 z-10 text-Gray-b5 text-sm font-normal">
                    {{ headers[0].label }}
                </div>

                <!-- other cells  -->

                <div class="w-full flex items-center justify-between h-[56px] sticky top-0 bg-Gray-b1 md:rounded-tr-xl">
                    <template v-for="(item, index) in headers" :key="index">
                        <div v-if="index != 0"
                            class="text-Gray-b5 pr-4 text-sm font-normal justify-end min-w-[150px] w-full h-full py-3 flex items-center"
                            :class="index == headers.length - 1 && 'last:rounded-tr-xl last:pr-2'
                        ">
                            <template v-if="item.sortable"><i class="isax" :class="item.sortType == 1 ? 'isax-arrow-down-1' : 'isax-arrow-up-2'
                        "></i>
                            </template>
                            {{ item.label }}
                        </div>
                    </template>
                </div>
            </header>

            <!-- body  -->

            <div class="min-w-fit w-full flex">

                <!-- first cell  -->

                <div
                    class="lg:min-w-[230px] w-full lg:max-w-[230px] min-w-[150px] max-w-[150px] flex flex-col sticky left-0 z-30">
                    <div v-for="(item, index) in state" :key="index">
                        <BaseCellsWithImage :state="item[Object.keys(item)[0]]"
                            class="w-full text-Gray-b6 gap-1 h-[56px] px-4"
                            :class="index % 2 == 0 ? 'bg-Gray-b2' : 'bg-Gray-b1'" />
                    </div>
                </div>

                <!-- cells  -->

                <div class="w-full flex flex-col justify-between">
                    <template v-for="(item, index) in state" :key="index">
                        <div class="flex w-full justify-between">
                            <template v-for="(value, key, j) in item" :key="key">
                                <div class="min-w-[150px] w-full" v-if="j != 0">
                                    <template v-if="value.type == 'with-image' && j != 0">
                                        <BaseCellsWithImage :state="value" class="w-full h-[56px] justify-center pr-4"
                                            :class="index % 2 == 0 ? 'bg-Gray-b2' : 'bg-Gray-b1'" />
                                    </template>
                                    <template v-else-if="value.type == 'column-chart'">
                                        <BaseCellsColumnChart :series="value.value" class="w-full h-[56px] pr-4"
                                            :class="index % 2 == 0 ? 'bg-Gray-b2' : 'bg-Gray-b1'" />
                                    </template>
                                    <template v-else-if="value.type == 'line-chart'">
                                        <BaseCellsLineChart :series="value.value" class="w-full h-[56px] pr-4"
                                            :class="index % 2 == 0 ? 'bg-Gray-b2' : 'bg-Gray-b1'" />
                                    </template>
                                    <template v-else-if="value.type == 'range'">
                                        <BaseCellsRange :state="value" class="w-full h-[56px] pr-4"
                                            :class="index % 2 == 0 ? 'bg-Gray-b2' : 'bg-Gray-b1'" />
                                    </template>
                                    <template v-else-if="value.type == 'simple'">
                                        <BaseCellsSimple :state="value" class="w-full h-[56px] pr-4"
                                            :class="index % 2 == 0 ? 'bg-Gray-b2' : 'bg-Gray-b1'" />
                                    </template>
                                </div>
                            </template>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    state: { default: [] },
    headers: { default: [] },
});
</script>
