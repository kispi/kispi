<template>
    <div class="about">
        <h2 class="c-vscode-template m-b-8">Profile</h2>
        <div class="profile m-b-24 p-8">
            <div class="m-b-8" :key="item.key" v-for="item in profile">
                <span class="c-vscode-key">{{ item.key }}:</span>
                <span
                    class="c-vscode-string"
                    :key="value"
                    v-for="(value, idx) in item.values">
                    {{ value }}
                    <span v-if="idx < item.values.length - 1">, </span>
                </span>
            </div>
        </div>
        <h2 class="c-vscode-template m-b-8">Intro</h2>
        <div class="c-vscode-text introduction p-8" v-html="introduction"></div>
    </div>
</template>
<script>
import HardCoded from '@/assets/hard-coded'

export default {
    name: "about",
    computed: {
        introduction() {
            return HardCoded.profile
        },
        profile() {
            return [{
                key: "Love",
                values: ["Rule", "Protocols (Web, HTTP, JSON, POW, Music...)"]
            }, {
                key: "Abilities",
                values: ["Backend", "Frontend", "DevOps, ... etc. Pretty much everything you need to make your own business idea become reality."]
            }, {
                key: "Do",
                values: ["Code", "Sing", "Compose", "Game"]
            }, {
                key: "Major",
                values: ["CSE"]
            }, {
                key: "Education",
                values: ["Seoul National University (2008 ~ 2016)"]
            }, {
                key: "Interested in",
                values: ["Finance", "Cryptoassets", "Trading", "Scalable Architecture"]
            }]
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