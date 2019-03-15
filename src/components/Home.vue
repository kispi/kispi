<template>
    <div class="home">
        <div class="languages m-b-48">
            <div class="m-b-16">
                <span class="c-cyan">console</span>.<span class="c-yellow">log</span>()
            </div>
            <div class="m-b-16">
                <span class="c-primary">var_dump</span>()
            </div>
            <div class="m-b-16">
                <span class="c-gray">fmt</span>.<span class="c-yellow">Println</span>()
            </div>
            <div class="m-b-16">
                <span class="c-yellow">print</span>()
            </div>
            <div class="m-b-16">
                <span class="c-red">printf</span>()
            </div>
            <div class="m-b-16">
                <span class="c-green">System</span>.<span class="c-blue">out</span>.<span class="c-yellow">println</span>()
            </div>
        </div>
        <div class="devops">
            <div class="m-b-16" style="font-family: Gulim">It Works!</div>
            <div class="m-b-16" style="font-family: Gulim">Welcome to nginx!</div>
            <div class="vue bgm-black p-16" style="font-family: Gulim">
                <div class="m-b-40">
                    <span class="p-5 m-r-16 bgm-green">DONE</span> <span class="c-green">Compiled successfully in 177ms</span>
                </div>
                <div class="p-16">
                    <div class="c-white m-b-5">App runing at:</div>
                    <div class="flex-row">
                        <div class="flex-wrap c-white" style="width: 160px;">- Local:</div>
                        <div class="c-cyan">http://localhost:8080/</div>
                    </div>
                    <div class="flex-row">
                        <div class="flex-wrap c-white" style="width: 160px;">- Network:</div>
                        <div class="c-cyan">http://1.2.3.4:8080/</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>
<style lang="less">
.home {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    padding: 8px;
}
</style>