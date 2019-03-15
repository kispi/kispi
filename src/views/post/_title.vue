<template>
    <section class="container">
        This is the article {{ test() }}
    </section>
</template>

<script>
export default {
    layout: 'BaseLayout',
    asyncData: () => ({
        test() {
            return this.$nuxt.$router.currentRoute.params.title
        }
    })
}
</script>

<style>
</style>

