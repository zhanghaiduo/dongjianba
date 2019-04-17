<template>
    <div>
        <div v-for="(item,index) in 4">
            <img width="100%" src="../../assets/images/7hot.png" alt="">
        </div>
        <hr>
        <h1>模块二</h1>
        <div v-for="(item,index) in 4">
            <img width="100%" src="../../assets/images/7hot.png" alt="">
        </div>
        <h1>推荐作者</h1>
        <ul>
            <li>1</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'zqAside',
        data() {
            return {
                opt: this.$store.state.router.options.routes,
            }
        },
        created() {
            console.log(this.$route.path)
        },
        methods: {
            go_hash() {

            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>