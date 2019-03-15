<template>
    <div class="techs">
        <!-- <Home/> -->
        <div class="category m-b-24" :key="idx" v-for="(tech, idx) in techs">
            <span class="text-xl" :class="tech.class">{{ tech.category }}</span>
            <ul class="p-l-16">
                <li class="f-16 m-b-5" :key="item" v-for="item in tech.items">{{ item }}</li>
                <li class="f-16 m-b-5">...</li>
            </ul>
        </div>
    </div>
</template>
<script>
import Home from '@/components/Home'

export default {
    name: "Techs",
    components: { Home },
    computed: {
        techs() {
            return [{
                category: "Backend",
                items: [
                    "golang (beego)", "java (spring)", "php (laravel, ci)", "python (django)", "node (express)"
                ]
            }, {
                class: "c-accent",
                category: "Frontend",
                items: [
                    "javascript (vue, angular)", "webpack", "nuxt", "websocket"
                ]
            }, {
                class: "c-blue",
                category: "Puslishing",
                items: [
                    "html5", "css", "less", "sass",
                ]
            }, {
                class: "c-pink",
                category: "Design Pattern",
                items: [
                    "oop", "mv(w)", "flux", "prototype", "composition"
                ]
            }, {
                class: "c-teal",
                category: "DevOps",
                items: [
                    "aws", "apache", "nginx", "git", "mysql", "redis", "pm2", "supervisor", "phinx", "zsh", "docker", "jenkins"
                ]
            }, {
                class: "c-orange",
                category: "Language EXP",
                items: [
                    "c", "c++", "basic (vb)", "java", "golang", "prolog", "lisp", "ocaml", "python", "javascript", "php", "html", "asm"
                ]
            }]
        }
    }
}
</script>
<style lang="less" scoped>
.techs {
    ul {
        padding: 0;

        li {
            list-style-type: none;
        }
    }
}
</style>