<script setup>
import useUiStore from '~~/stores/ui';

const nuxtApp = useNuxtApp();

nuxtApp.hook("page:finish", () => {
    if (useUiStore().$state.pageLoader == true) {
        setTimeout(() => {

            useUiStore().setPageLoader(false)
        }, 4000);
    }
});

</script>
<script>
export default {
    data() {
        return {
            svg: `<path class="path" d="
                        M 30 15
                        L 28 17
                        M 25.61 25.61
                        A 15 15, 0, 0, 1, 15 30
                        A 15 15, 0, 1, 1, 27.99 7.5
                        L 15 15
                        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>`
        }
    },
    watch: {
        showLoader(newVal, oldVal) {
            debugger
            if (newVal == true) {
                this.$refs.progressBar.style.opacity = '1';
                this.$refs.progressBar.style.transitionDuration = '1000ms';
                this.$refs.progressBar.style.width = '40%';
            } else if (newVal == false) {
                this.$refs.progressBar.style.transitionDuration = '1000ms';
                this.$refs.progressBar.style.width = '100%';
                setTimeout(() => {
                    this.$refs.progressBar.style.opacity = '0';
                    this.$refs.progressBar.style.transitionDuration = '0ms';
                    this.$refs.progressBar.style.width = '0%';
                }, 1000);
            }
        },
    },
    computed: {
        showLoader() {
            return useUiStore().$state.pageLoader;
        }
    },
};
</script>
<template>
    <div ref="progressBar" v-if="showLoader"
        class="fixed left-0 top-0 z-50 transition-all bg-orange h-full LoadingBar shadow-[0_0_10px] shadow-orange flex items-center justify-center"
        :style="{ width: '100%' }" v-loading="showLoader" element-loading-text="Loading..."
        :element-loading-spinner="svg" element-loading-svg-view-box="-10, -10, 50, 50"
        element-loading-background="rgba(122, 122, 122, 0.8)">
    </div>
</template>