<template>
    <div class="h-screen w-screen flex items-center justify-center login lg:!bg-contain !bg-cover">
        <div class="bg-Gray-b6 rounded-xl lg:px-8 px-4 py-[30px] max-w-[500px] w-full border-[1px] border-Gray-b5">
            <NuxtLink class="flex items-center justify-center mt-6" to="/dashboard"><img src="/mini-logo.svg"
                    class="h-[58px]" />
            </NuxtLink>
            <h4 class="text-Gray-b1 text-lg font-medium text-center mt-1 mb-6">Kennstin Hive</h4>
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>
<style>
.login {
    background: url(/img/login-bg.svg) no-repeat center right #ffffff;
}
</style>