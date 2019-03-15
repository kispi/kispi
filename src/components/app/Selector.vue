<template>
    <div class="selector" :class="{'disabled': disabled}" ref="selector">
        <div class="selected-item select nowrap text-ellipsis" @click="onClickSelect">
            {{ val }}
        </div>

        <transition name="slide-fade">
            <ul class="item-list shadow" v-if="showSelect">
                <li
                    class="text-ellipsis nowrap"
                    :class="{ 'selected': item === val }"
                    v-for="(item, index) in items"
                    :key="index"
                    @click="onSelect(item)">
                    <span v-if="!translate">{{ item }}</span>
                    <span v-else>{{ item.toUpperCase() | translate }}</span>
                </li>
            </ul>
        </transition>

    </div>
</template>

<script>
export default {
    name: 'Selector',
    props: ['items', 'value', 'translate', 'disabled'],
    data: () => ({
        val: null,
        showSelect: false
    }),
    mounted() {
        this.val = this.value;
    },
    created() {
        document.addEventListener('click', this.documentClick)
    },
    destroyed() {
        document.removeEventListener('click', this.documentClick)
    },
    methods: {
        documentClick(e){
            let el = this.$refs['selector'];
            let target = e.target;
            if (el !== target && !el.contains(target)) {
                this.showSelect = false;
            }
        },
        onSelect(item) {
            this.showSelect = false;
            if (item !== this.val)
                this.$emit('change', { oldVal: this.val, newVal: item });
            
            this.val = item;
            this.$emit('input', item);
        },
        onClickSelect() {
            if (!this.disabled)
                this.showSelect = !this.showSelect
        }
    },
    watch: {
        value: function(newVal, oldVal) {
            this.val = newVal
        }
    }
}
</script>

<style lang="less" scoped>
.selector {
    position: relative;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;

    .item-list {
        position: absolute;
        animation-duration: .3s;
        left: 0;
        right: 0;
        margin: 0;
        padding: 0;
        background: #fff;
        z-index: 1;

        li {
            min-width: 100%;
            list-style-type: none;
            border-bottom: 1px solid #eee;
            padding: 4px 16px 4px 8px;
        }

        li:not(.selected):hover {
            background: #eee;
        }
    }

    .selected-item {
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        padding: 4px 16px 4px 8px;
    }

    .slide-fade-enter-active {
        transition: all .1s ease;
    }
    
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(-20px);
        opacity: 0;
    }
}
</style>
