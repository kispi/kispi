<template>
    <div id="app">
        <transition name="fade">
            <router-view id="section"/>
        </transition>

        <Header/>
        <Toast/>
        <div class="app-loading" v-if="loading && shouldShowLoading">
            <ProgressView />
        </div>

    </div>
</template>

<script>
import Header from '@/components/Header'
import Toast from '@/components/app/Toast';
import ProgressView from '@/components/app/ProgressView';

export default {
    name: 'App',
    components: {
        Header,
        Toast,
        ProgressView,
    },
    data: () => ({
        shouldShowLoading: false,
    }),
    watch: {
        loading() {
            this.shouldShowLoading = false;
            if (this.loading) {
                setTimeout(() => {
                    this.shouldShowLoading = true;
                }, 150);
            }
        }
    },
    computed: {
        loading() {
            return this.$store.getters.loading;
        },
    }
}
</script>

<style lang="less">
#app {
    padding: 16px;
}

.app-loading {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 20;
}

#background {
    z-index: -1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.9;

}
</style>