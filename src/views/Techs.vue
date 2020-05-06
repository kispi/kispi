<template>
    <div class="techs">
        <div class="category m-b-24" :key="idx" v-for="(tech, idx) in techs">
            <span class="text-xl" :class="tech.class">{{ tech.category }}</span>
            <div class="badges">
                <div class="badge" :key="item" v-for="item in tech.items">{{ item }}</div>
                <div class="badge">...</div>
            </div>
        </div>
    </div>
</template>
<script>
import Home from '@/components/Home'

export default {
    name: "techs",
    components: { Home },
    computed: {
        techs() {
            return [{
                class: "c-vscode-template",
                category: "Backend",
                items: [
                    "golang (beego)", "java (spring)", "php (laravel, ci)", "python (django, flask)", "node (express)", "ruby (rails)", "mysql", "redis", "mongodb"
                ]
            }, {
                class: "c-accent",
                category: "Frontend",
                items: [
                    "html", "css", "javascript", "typescript", "less", "sass", "vue", "svelte", "react", "angular", "vuex", "redux", "mobx", "webpack", "grunt", "gulp", "nuxt", "websocket"
                ]
            }, {
                class: "c-blue",
                category: "Mobile App",
                items: [
                    "android", "ios", "react-native", "ionic", "flutter"
                ]
            }, {
                class: "c-pink",
                category: "Methodology",
                items: [
                    "fp", "oop", "mv(w)", "flux", "prototype", "composition", "rest", "graphql"
                ]
            }, {
                class: "c-teal",
                category: "DevOps",
                items: [
                    "ec2", "s3", "route53", "rdb", "cloudfront", "apache", "nginx", "git", "pm2", "supervisor", "phinx", "zsh", "docker", "jenkins"
                ]
            }, {
                class: "c-orange",
                category: "Language EXP",
                items: [
                    "c", "c++", "basic (vb)", "java", "golang", "rust", "prolog", "lisp", "ocaml", "python", "ruby", "javascript", "php", "html", "wasm", "asm"
                ]
            }]
        }
    }
}
</script>