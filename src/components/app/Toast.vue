<template>
    <transition name="slide-down">
        <div
            class="toast-wrapper"
            v-if="toast.show">
            <div
                class="toast shadow"
                :class="{'bgm-green': toast.type === 'success', 'bgm-red': toast.type === 'error'}"
                @click.stop="toastClicked">
                <div v-html="html" />
                <i
                    class="zmdi zmdi-close"
                    v-if="toast.type === 'dismiss'"
                    @click="dismiss"/>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    methods: {
        dismiss() {
            this.$store.dispatch("removeToast");
        },
        toastClicked() {},
    },
    computed: {
        showToast() {
            return this.toast.show;
        },
        toast() {
            return this.$store.getters.toast;
        },
        html() {
            if (this.toast.message) {
                return this.$translate(this.toast.message).replace(/\n/g, "<br>")
            }
        }
    },
    watch: {
        showToast() {
            if (this.toast.show) {
                if (this.toastTimeout) {
                    clearTimeout(this.toastTimeout);
                }
                switch (this.toast.type) {
                    case "dismiss":
                        break;
                    default:
                        this.toastTimeout = setTimeout(() => {
                            this.$store.dispatch("removeToast");
                        }, 1500);
                }
            }
        }
    }
};
</script>
<style scoped lang="less">
</style>
