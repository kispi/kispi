<template>
    <div class="menu flex-row items-center">
        <div
            class="flex-fill"
            :key="item.name"
            v-for="item in items">
            <div class="menu-item slow-hover"
                :class="{'selected': item.name === selected.name}"
                @click="onClickMenu(item)">
                {{ item.name }}<span class="c-vscode-bracket">()</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Menu",
    data: () => ({
        selected: {}
    }),
    computed: {
        items() {
            return [{
                name: "about",
            }, {
                name: "techs"
            }, {
                name: "projects"
            }, {
                name: "post"
            }]
        }
    },
    methods: {
        onClickMenu(item) {
            this.selected = item
            this.$router.push({ name: item.name })
        }
    },
    mounted() {
        this.selected = this.items.find(item => item.name.toLowerCase() === this.$route.name.toLowerCase())
    }
}
</script>