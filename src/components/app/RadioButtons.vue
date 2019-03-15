<template>
    <div class="radio-buttons">
        <div class="flex-row">
            <button
                class="btn btn-brd p-relative flex-fill slow-hover"
                :class="{'selected': selected === item}"
                @click="onClick(item)" v-for="item in items" :key="item.value">
                <i class="zmdi zmdi-check" v-show="selected === item && !hideCheck"/>
                <div>{{ item.title | translate }}</div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RadioButtons',
    props: ['items', 'value', 'hideCheck'],
    data: () => ({
        selected: null
    }),
    mounted() {
        this.selected = this.items.find(item => item.value === this.value)
    },
    methods: {
        onClick(item) {
            this.selected = item
            this.$emit('change', this.selected)
        }
    },
}
</script>
<style lang="less" scoped>
.slow-hover:hover {
    background: rgba(76, 175, 80, 0.2);
}
</style>