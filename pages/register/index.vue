<template>
    <div class="flex justify-center">
        <form @submit.prevent="handleRegister" class="mt-8 flex flex-col items-center gap-4 max-w-[300px] w-full">
            <div class="w-full">
                <input type="email" v-model="register.email"
                    class="w-full border-none outline-none bg-Gray-b5 rounded-lg px-2 py-2" placeholder="Email" />
            </div>
            <div class="w-full relative">
                <input :type="register.isPasswordVisible ? 'text' : 'password'" v-model="register.password"
                    class="w-full border-none outline-none bg-Gray-b5 rounded-lg px-2 py-2" placeholder="Password" />
                <div @click="register.isPasswordVisible = !register.isPasswordVisible"
                    class="absolute right-2 top-3 cursor-pointer">
                    <Icon :name="register.isPasswordVisible ? 'visible-eye' : 'hidden-eye'" />
                </div>
            </div>
            <div class="w-full relative">
                <input :type="register.isRepeatPasswordVisible ? 'text' : 'password'" v-model="register.repeatPassword"
                    class="w-full border-none outline-none bg-Gray-b5 rounded-lg px-2 py-2"
                    placeholder="Repeat Password" />
                <div @click="register.isRepeatPasswordVisible = !register.isRepeatPasswordVisible"
                    class="absolute right-2 top-3 cursor-pointer">
                    <Icon :name="register.isRepeatPasswordVisible ? 'visible-eye' : 'hidden-eye'" />
                </div>
            </div>
            <BaseButton class="w-full disabled:bg-Gray-b5 disabled:text-Gray-b3 mt-6"
                :disabled="register.email == '' || register.password == '' ||register.repeatPassword==''">
                Register
            </BaseButton>
            <p class="text-Gray-b2 font-normal text-sm">Already Have an Account?
                <NuxtLink to="/login" class="underline font-medium text-Blue">Log In</NuxtLink>
            </p>
        </form>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "login",
});
const register = ref({
    email: '',
    password: '',
    isPasswordVisible: false,
    repeatPassword: '',
    isRepeatPasswordVisible: false,
    isRememberable: false
})

const handleRegister = () => {
    console.log('register');
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