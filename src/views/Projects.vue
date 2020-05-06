<template>
    <div class="projects">
        <div class="p-8">
            <div :key="item.title" v-for="item in items" class="project m-b-24">
                <h3 class="c-vscode-template" :class="{'text-linethrough': item.deprecated}">{{ item.title }} ({{ item.period }})</h3>
                <div class="p-8">
                    <div class="c-vscode-key">{{ item.desc }}</div>
                    <div class="c-vscode-string pre-line">{{ item.charge }}</div>
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
                period: "2019-04 ~ 2020-05",
                type: "job",
                title: "Vanillabridge",
                desc: "주선자가 해주는 진짜 소개팅! 바닐라브릿지입니다",
                charge: `
                ROR, Go를 이용한 서버 개발 및 Ionic, Vue 기반 모바일, 웹 프론트엔드 개발
                - 관리자페이지 신규 개발 (백엔드 + 프론트엔드 1인 전담)
                - 주선자 PC 웹앱 개발 (프론트엔드 1인 전담)
                - Ionic 앱 개발
                - Ionic 레거시 앱의 React Native로의 포팅

                현재 많은 수익을 올리는 바닐라브릿지의 상위 프로주선자들의 절대다수가 사용하는 웹 PC버전의 프론트엔드 (커밋 기여율 거의 100%) 및 CS 업무를 위한 관리자용 Admin 앱을 (Go + Vue의 조합으로 백엔드 및 프론트엔드 전체: 커밋 기여율 100%) 개발하였습니다.

                특히 바닐라브릿지 프로주선자 PC 앱은 본질적으로 '채팅'이 가장 핵심적인 기능이 되는 앱으로서, 현재 스타트업 전체를 통틀어 서비스되는 그 어떤 앱들과 비교해도 뒤지지 않는 상당한 복잡도의 프론트엔드 및 비즈니스 로직 구현 난이도를 지니고 있습니다. 또한 이를 데스크톱 모드 뿐 아니라 모바일에서 볼 시 기존의 레거시 바닐라브릿지 앱과 똑같은 형태로 보이도록 반응형 스타일도 완벽하게 구현되어 있고, 이를 유지보수가 용이한 형태로 상당히 잘 구성한 모범적인 프로젝트라고 생각합니다. 이는 현재 React Native로의 포팅이 거의 완료된 차기 프로젝트의 코어 웹뷰에 사용됩니다.

                입사 이후 1년간 약 5개의 프로젝트를 생성 & 스캐폴딩하며 프론트엔드 Lead Developer 정도의 포지션을 가져왔다고 생각됩니다.
                `,
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
    padding-bottom: 240px !important;

    .social {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 16px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 2%,
            rgba(255, 255, 255, 0.2) 98%,
        );

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