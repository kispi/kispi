<template>
    <div class="about">
        <div class="introduction" v-html="introduction"></div>
    </div>
</template>
<script>
import HardCoded from '@/assets/hard-coded'

export default {
    name: "About",
    computed: {
        introduction() {
            return HardCoded.profile
        }
    }
}
</script>
<style lang="less">
.introduction {
    white-space: pre-wrap;
    font-size: 16px;
    line-height: 20px;
}
</style>