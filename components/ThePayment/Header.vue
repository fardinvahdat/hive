<template>
    <div class="lg:bg-transparent bg-Gray-b2 lg:p-8 p-4 rounded-xl">
        <div class="flex flex-col lg:gap-4 gap-1">
            <h2 class="font-medium xl:text-[34px] lg:text-[24px] text-lg text-Gray-b6 lg:my-1">Payment</h2>
            <p class="lg:text-base text-sm text-Gray-b6 font-light">Fill all the inputs carfully</p>
            <div class="flex justify-between items-center lg:flex-row flex-col lg:gap-0 gap-6 lg:px-8 px-4">
                <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                    Price
                    <span class="text-Gray-b6 text-base"><span class="text-lg text-Primary">54</span> USDT</span>
                </div>
                <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                    Type
                    <span class="text-Gray-b6 text-base">Pay</span>
                </div>
                <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                    Status
                    <span class="rounded-2xl bg-Blue px-2 py-[2px] text-Gray-b6">
                        Waiting
                    </span>
                </div>
                <div class="text-xs text-Gray-b4 font-normal flex flex-col items-center gap-1">
                    Time
                    <span class="text-Gray-b6 text-base">Attractive</span>
                </div>
                <div class="h-[68]">
                    <ThePaymentCountdownCircle />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>