<template>
    <section class="container">
        <ul>
            <li :key="p" v-for="p in posts">
                {{ p }}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: "Post",
    computed: {
        posts() {
            return ['a', 'b', 'c']
        }
    },
}
</script>

<style>
</style>

