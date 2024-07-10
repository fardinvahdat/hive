<template>
    <div class="flex justify-center">
        <form @submit.prevent="handleLogin" class="mt-8 flex flex-col items-center gap-4 max-w-[300px]">
            <p class="text-Gray-b2 font-normal lg:text-base text-sm mb-2">Please enter the email you used for sign up
                and
                we'll send a link to reset the password.</p>
            <div class="w-full">
                <input type="email" v-model="login.email"
                    class="w-full border-none outline-none bg-Gray-b5 rounded-lg px-2 py-2" placeholder="Email">
            </div>
            <div @click="handleLogin" class="w-full">
                <BaseButton class="w-full disabled:bg-Gray-b5 disabled:text-Gray-b3"
                    :disabled="login.email == '' || login.password == ''">Reset</BaseButton>
            </div>

            <p class="text-Gray-b2 font-normal text-sm">
                <NuxtLink class="underline font-medium text-Blue" to="/login">Remember Your Password?
                </NuxtLink>
            </p>
        </form>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "login",
});
const login = ref({
    email: '',
})
const isEmailSent = ref(false)

const handleLogin = () => {
    isEmailSent.value = true
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