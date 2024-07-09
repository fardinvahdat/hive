<template>
    <div class="flex justify-center">
        <form @submit.prevent="handleLogin" class="mt-8 flex flex-col items-center gap-4 max-w-[300px]">
            <div class="w-full">
                <input type="email" v-model="login.email"
                    class="w-full border-none outline-none bg-Gray-b5 rounded-lg px-2 py-2" placeholder="Email">
            </div>
            <div class="w-full">
                <input type="password" v-model="login.password"
                    class="w-full border-none outline-none bg-Gray-b5 rounded-lg px-2 py-2" placeholder="Password">
                <NuxtLink class="text-sm font-normal cursor-pointer">Forget Your Password?</NuxtLink>
            </div>
            <div class="mt-3 mb-1 w-full">
                <el-checkbox v-model="login.isRememberable" label="Remember Account" fill="#F8C337" />
            </div>
            <BaseButton class="w-full disabled:bg-Gray-b5 disabled:text-Gray-b3"
                :disabled="login.email == '' || login.password == ''">Login</BaseButton>
        </form>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "login",
});
const login = ref({
    email: '',
    password: '',
    isRememberable: false
})

const handleLogin = () => {
    console.log('login');
}
</script>
<style lang="scss">
.el-checkbox__input.is-checked+.el-checkbox__label,
.el-checkbox__label {
    @apply text-Gray-b2 font-normal text-sm
}

.el-checkbox__input.is-checked .el-checkbox__inner {
    @apply bg-Primary border-Primary
}

.el-checkbox__inner:hover {
    @apply border-Primary
}
</style>