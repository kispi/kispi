<template>
    <div class="contact">
        <ul>
            <li
                :key="idx"
                v-for="(item, idx) in items">
                <div class="c-vscode-key" v-html="item.key"/>
                <a
                    :href="item.key === 'email' ? `mailto:${item.value}` : `https://${item.value}`"
                    target="_blank"
                    class="c-vscode-string"
                    v-html="item.value"/>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "contact",
    computed: {
        items() {
            return [{
                key: 'email',
                value: 'kispi@naver.com',
            }, {
                key: 'github',
                value: 'github.com/kispi',
            }, {
                key: 'rocketpunch',
                value: 'rocketpunch.com/@kispi1897'
            }]
        },
    },
}
</script>

<style lang="less">
.contact {
    li {
        font-size: 20px;
        line-height: 28px;

        &:not(:last-child) {
            margin-bottom: 16px;
        }
    }
}
</style>