<template>
    <div class="mb-6 bg-Gray-b2 lg:p-8 p-4 rounded-lg">
        <div class="flex items-center gap-2 border-b-[1px] border-Gray-b4 pb-4">
            <div><img src="/icons/avatar.svg" class="w-12 h-12 object-contain" alt=""></div>
            <div><button
                    class="outline-none bg-transparent text-Gray-b4 hover:text-Gray-b6 text-base font-normal">What's on
                    your mind?</button></div>
        </div>
        <div class="flex items-center gap-8 pt-4">
            <button class="flex items-center gap-1 text-Gray-b5">
                <Icon name="attach" />
                Upload
            </button>
            <button class="flex items-center text-Gray-b5">
                <Icon name="poll" />
                Poll
            </button>
        </div>
    </div>
</template>

<script setup>

</script>