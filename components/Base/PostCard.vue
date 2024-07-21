<template>
    <div class="bg-Gray-b2 lg:p-8 p-4 lg:pb-0 pb-0 rounded-lg mb-6">
        <header class="flex items-center justify-between">
            <div class="flex gap-2">
                <div>
                    <img :src="state.authorAvatar" :alt="state.authorId" class=" w-[50px] h-[50px] rounded-lg">
                </div>
                <div class="flex flex-col gap-">
                    <h4 class="font-medium text-lg text-Gray-b6">@{{ state.authorId }}</h4>
                    <p class="text-sm font-normal text-Gray-b4 flex items-center gap-1">{{ state.regoin }}
                    <div class="w-2 h-2 bg-Gray-b5 rounded-full"></div>
                    <span class="text-Gray-b6">
                        {{ state.releaseTime }}
                    </span>
                    </p>
                </div>
            </div>
            <div><el-dropdown trigger="click" popper-class="notifications">
                    <span class="el-dropdown-link">
                        <Icon name="more" />
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item class="flex items-center gap-1">
                                <span>Save Post</span>
                            </el-dropdown-item>
                            <el-dropdown-item class="flex items-center gap-1">
                                <span>Turn On Notifications</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown></div>
        </header>
        <main class="mt-8">
            <p>
                {{ !showMore && state.description.length > 50 ? state.description.slice(0, 50) : state.description }}
                <a href="javascript:void(0)" @click="showMore = !showMore"
                    class="text-Primary underline text-sm ml-2 whitespace-pre">{{ showMore ? 'Show Less' : 'Show More'
                    }}
                </a>
            </p>
        </main>
        <footer class="border-t-[1px] border-Gray-b4 mt-6 py-4 grid grid-cols-3 items-center justify-between">
            <button class="text-sm text-Gray-b4 hover:text-Gray-b5">Like</button>
            <button class="text-sm text-Gray-b4 hover:text-Gray-b5">Share</button>
            <button class="text-sm text-Gray-b4 hover:text-Gray-b5">Comment</button>
        </footer>
    </div>
</template>

<script setup>
const props = defineProps({
    state: {
        default: {
            id: 0,
            authorId: "",
            authorAvatar: "",
            authorLevel: 0,
            releaseTime: "",
            regoin: "",
            description: "",
            retweetedPost: 0,
        }
    }
})
const showMore = ref(false)
</script>