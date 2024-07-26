<template>
    <div>
        <ClientOnly>
            <el-dialog v-model="writePost" :align-center="true">
                <template #header>
                    <h2 class="text-xl text-Gray-b6">Write Post</h2>
                </template>

                <main class="h-[180px] overflow-y-auto py-4">
                    <div class="flex gap-2 h-full">
                        <img src="/icons/avatar.svg" class="w-12 h-12 object-contain" alt="">
                        <textarea v-model="post"
                            class="bg-transparent w-full h-full border-none outline-none pt-3 text-Gray-b5"
                            placeholder="Share your thoughts. Tag People with @ and Markets with $.">
        </textarea>
                    </div>
                </main>

                <footer class="flex items-center justify-between border-t-[1px] border-Gray-b3">
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
                    <div class="flex items-center gap-2 pt-4">
                        <p :class="post.length < 5000 ? 'text-Gray-b4' : 'text-Red'">
                            {{ post.length }} / 5000
                        </p>
                        <BaseButton
                            class="flex items-center gap-1  disabled:bg-Gray-b4 disabled:bg-opacity-10 disabled:text-Gray-b4 disabled:cursor-not-allowed"
                            :disabled="post.length < 3 || post.length > 5000" @click="handlePost">
                            Post
                        </BaseButton>
                    </div>
                </footer>
            </el-dialog>
        </ClientOnly>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useDialogStore } from '@/stores/dialogs'
import { usePostsStore } from '@/stores/posts'

const store = useDialogStore()
const postStore = usePostsStore()
const { writePost } = storeToRefs(store)
const { posts } = storeToRefs(postStore)

const post = ref('')

const handlePost = () => {
    let lastPost = { ...posts.value[posts.value.length - 1] }
    lastPost.id = lastPost.id + 1
    lastPost.authorId = 'Me'
    lastPost.authorAvatar = '/icons/avatar.svg'
    lastPost.description = post.value
    posts.value.push(lastPost)
    writePost.value = false
    post.value = ''
}
</script>