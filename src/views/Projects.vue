<template>
    <div class="projects">
        <div class="p-8">
            <div :key="item.title" v-for="item in items" class="project m-b-24">
                <h3 class="c-vscode-template" :class="{'text-linethrough': item.deprecated}">{{ item.title }} ({{ item.period }})</h3>
                <div class="p-8">
                    <div class="c-vscode-key">{{ item.desc }}</div>
                    <div class="c-vscode-string">{{ item.charge }}</div>
                    <div class="c-vscode-text">{{ item.tech }}</div>
                    <div>
                        <a
                            target="_blank"
                            :href="link"
                            class="c-vscode-function text-underline display-table"
                            :key="link"
                            v-for="link in item.links">
                            {{ link }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="social">
            <transition-group name="list">
                <div
                    :key="0"
                    class="c-vscode-function pointer-cursor text-underline"
                    @click="showSocial = true"
                    v-show="!showSocial">아직 내가 머신러닝보다 잘하는 것들</div>
                <div
                    :key="1"
                    v-show="showSocial">
                    <i
                        @click="showSocial = false"
                        class="zmdi zmdi-close pointer-cursor"></i>
                    <div
                        class="item m-b-16"
                        :key="item.link"
                        v-for="item in socialItems">
                        <a
                            target="_blank"
                            :href="item.link"
                            class="c-vscode-function text-underline display-block m-b-8">
                            {{ item.link }}
                        </a>
                        <div class="limited-width c-vscode-text" v-html="item.desc"/>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>
<script>
export default {
    name: "projects",
    data: () => ({
        showSocial: false,
    }),
    computed: {
        items() {
            return [{
                period: "2019-01 ~",
                type: "personal",
                title: "MAPLETs",
                desc: "메이플스토리 유틸리티, 시뮬레이터들 및 커뮤니티",
                charge: "기획 / 디자인 / 개발 / 배포",
                tech: "Vue / Go / MySQL / Redis / Websocket / GA",
                links: [
                    "http://maplets.kispi.net/"
                ]
            }, {
                period: "2019-04 ~",
                type: "job",
                title: "Vanillabridge",
                desc: "주선자가 해주는 진짜 소개팅! 바닐라브릿지입니다",
                charge: "바닐라브릿지 앱, 주선자용 웹 앱, CS용 Admin PWA 개발",
                tech: "Ionic / Vue / ROR / Go / Firebase"
            }, {
                period: "2018-01 ~ 2019-04",
                type: "job",
                title: "TokoTalk",
                desc: "인도네시아 소상공인들을 대상으로 한 E-Commerce 솔루션",
                charge: "Go, AngularJS, Vue를 이용한 풀스택 (Frontend, RestAPI) 개발",
                links: [
                    "https://tokoadmin.tokotalk.com/",
                    "https://shop.tokotalk.com/"
                ]
            }, {
                period: "2017-05 ~ 2017-12",
                deprecated: true,
                type: "job",
                title: "Porter",
                desc: "인도네시아 물류 배달 앱",
                charge: "PHP (Laravel), 안드로이드 유지 보수",
            }, {
                period: "2016-05 ~ 2016-08",
                type: "job",
                title: "Fanmaum",
                charge: "PHP (Codeignitor) 개발",
                tech: "PHP / MySQL / JQuery / Docker",
                links: [
                    "https://fanmaum.com/"
                ]
            }]
        },
        socialItems() {
            return [{
                link: "https://github.com/kispi",
                desc: "진지하게 하는 프로젝트들부터 장난감들까지 다 있습니다. 잘 찾아보면 보물이 있을수도(!)"
            }, {
                link: "https://blog.naver.com/kispi",
                desc: "20대 초반까지 클래식에 미쳐있었을 때 열심히 하던 블로그입니다."
            }]
        }
    }
}
</script>

<style lang="less">
.projects {
    .social {
        position: fixed;
        bottom: 8px;
        right: 8px;

        .zmdi-close {
            display: block;
            margin: auto;
            margin-bottom: 8px;
            width: 20px;
            height: 20px;
            font-size: 12px;
            padding: 4px;
            text-align: center;
            border: 1px solid #888;
            color: #888;
            border-radius: 50%;
        }

        .item {
            max-width: 200px;
        }
    }

    .project {
        a, div {
            margin-bottom: 4px;
        }
    }
}
</style>