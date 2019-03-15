<template>
    <div class="base-layout">
        <Header/>
        <Toast/>
        <Loading/>
        <nuxt id="section"/>
        <div class="bottom-nav"></div>
    </div>
</template>
<script>
import Header from "@/components/Header"
import Loading from "@/components/app/Loading"
import Toast from "@/components/app/Toast"

export default {
    components: { Header, Loading, Toast },
}
</script>
