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
                    "golang (beego)", "node (express, fastify, typeorm)", "java (spring)", "php (laravel, ci, phinx)", "python (django)"
                ]
            }, {
                class: "c-accent",
                category: "Frontend",
                items: [
                    "javascript (vue, react, svelte, angular)", "webpack", "nuxt", "websocket", "vuex", "mobx", "SEO"
                ]
            }, {
                class: "c-blue",
                category: "Mobile App",
                items: [
                    "android", "ios", "react-native", "ionic"
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
                    "aws (ec2, elb, cf, acm, route53, s3...)", "apache", "nginx", "git", "mysql", "redis", "pm2", "supervisor", "zsh", "docker", "jenkins", "k8s"
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