<template>
    <div class="payment">
        <BaseBanner />
        <ThePaymentHeader />
        <div class="grid grid-cols-3 gap-6 lg:mt-0 mt-6">
            <div class="lg:col-span-2 col-span-3 grid grid-cols-3 gap-6 bg-Gray-b2 rounded-xl lg:p-8 p-4">
                <template v-if="currentStep == 1">
                    <div class="lg:col-span-1 col-span-3 flex justify-center flex-col gap-8">
                        <h3 class="text-Gray-b6 font-medium lg:text-2xl text-lg">Payment</h3>
                        <p classs="text-Gray-b5 text-base font-normal">Select your network and add your wallet address
                            to
                            countinue</p>
                    </div>
                    <div class="lg:col-span-2 col-span-3 flex flex-col gap-6">
                        <div class="w-full flex flex-col gap-2">
                            <label class="text-sm text-Gray-b4 font-normal">Network</label>
                            <el-select v-model="payment.network" placeholder="Network" class="h-[50px]">
                                <el-option v-for="item in networkOptions" :key="item.value" :label="item.label"
                                    :value="item.label" />
                            </el-select>
                        </div>
                        <div class="w-full flex flex-col gap-2">
                            <label class="text-sm text-Gray-b4 font-normal">Wallet Address</label>
                            <el-select v-model="payment.address" placeholder="Add new or choose from list"
                                class="h-[50px]">
                                <el-option v-for="item in addressOptions" :key="item.value" :label="item.label"
                                    :value="item.label" /><template #footer>
                                    <el-button v-if="!isAdding" text @click="onAddOption">
                                        Add an option
                                    </el-button>
                                    <template v-else>
                                        <el-input v-model="optionName" class="option-input mb-2 text-Gray-b6"
                                            placeholder="Address" />
                                        <BaseButton class="rounded-md py-1" @click="onConfirm">
                                            confirm
                                        </BaseButton>
                                        <BaseButton class=" ml-4 rounded-md !border-Gray-b2 bg-transparent border-[1px]"
                                            @click="clear">cancel</BaseButton>
                                    </template>
                                </template>
                            </el-select>
                        </div>
                        <BaseButton class="w-full" @click="currentStep = 2"
                            :disabled="!payment.network || !payment.address"
                            :class="(!payment.network || !payment.address) && 'text-Gray-b4 bg-transparent border-[1px] !border-Gray-b3'">
                            Connect</BaseButton>
                    </div>
                </template>
                <template v-else-if="currentStep == 2">
                    <div class="lg:col-span-1 col-span-3 flex flex-col justify-center gap-1">
                        <div class="w-[100px] h-[100px] bg-Gray-b6"></div>
                        <span classs="text-Gray-b3 text-xs font-normal">Use this to get your txID</span>
                        <span classs="text-Gray-b6 text-sm font-normal">Pay attention to use {{ payment.network }}</span>
                    </div>
                    <div class="lg:col-span-2 col-span-3 flex flex-col gap-6">
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col gap-0">
                                <span class="text-[14px] text-Gray-b4 font-normal">Network</span>
                                <span class="text-Base text-Gray-b6 font-medium">{{ payment.network }}</span>
                            </div>
                            <div class="flex flex-col gap-0">
                                <span class="text-[14px] text-Gray-b4 font-normal">Wallet Address</span>
                                <span class="text-Base text-Gray-b6 font-medium">{{ payment.address }}</span>
                            </div>
                        </div>
                        <div class="w-full flex flex-col gap-2">
                            <label class="text-sm text-Gray-b4 font-normal">txID</label>
                            <input type="text" v-model="payment.tx"
                                class="h-[50px] rounded-xl text-Gray-b6 text-base bg-Gray-b1 outline-none border-[1px] border-transparent focus:border-Primary placeholder:text-Gray-b5 px-4"
                                placeholder="txID" />
                        </div>
                        <BaseButton class="w-full" :disabled="!payment.tx"
                            :class="(!payment.tx) && 'text-Gray-b4 bg-transparent border-[1px] !border-Gray-b3'">
                            Pay</BaseButton>
                    </div>
                </template>
            </div>
            <div class="lg:col-span-1 col-span-3">
                <TheCoinsDetailWidget v-for="(item, index) in widgetBox" :key="index" :header="item.header"
                    :state="item.list" class="mb-6 bg-Gray-b2 border-Gray-b2" type="secondary" />
            </div>
        </div>
    </div>
</template>

<script setup>
const payment = ref({
    network: '', address: '', tx: ''
})
const currentStep = ref(1)
const networkOptions = ref([
    {
        value: 1,
        label: 'ERC20',
    },
    {
        value: 2,
        label: 'ERC20',
    },
    {
        value: 3,
        label: 'ERC20',
    },
])
const isAdding = ref(false)
const optionName = ref('')
const addressOptions = ref([
    {
        value: 1,
        label: 'ERC20ERC20ERC27C20',
    },
    {
        value: 2,
        label: 'ERC20ERC20ERC27C20',
    },
    {
        value: 3,
        label: 'ERC20ERC20ERC27C20',
    },
])
const widgetBox = ref([
    {
        header: 'Payment History',
        list: [
            {
                label: "54 USDT",
                caption: ['Channel Name', 'Name Of Outhor'],
                values: ['Oct, 07, 2018', 'Pin: 3548774']
            },
            {
                label: "54 USDT",
                caption: ['Channel Name', 'Name Of Outhor'],
                values: ['Oct, 07, 2018', 'Pin: 3548774']
            },
            {
                label: "54 USDT",
                caption: ['Channel Name', 'Name Of Outhor'],
                values: ['Oct, 07, 2018', 'Pin: 3548774']
            },
        ]
    },
])

const onAddOption = () => {
    isAdding.value = true
}

const onConfirm = () => {
    if (optionName.value) {
        addressOptions.value.push({
            label: optionName.value,
            value: optionName.value,
        })
        clear()
    }
}

const clear = () => {
    optionName.value = ''
    isAdding.value = false
}
</script>
<style lang="scss">
.payment .el-select__wrapper {
    @apply h-full rounded-xl #{!important};
}
</style>