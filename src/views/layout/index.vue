<template>
    <div>
        <el-scrollbar style="height:100%">
            <zq-header></zq-header>

            <el-container  class="container">
                <el-row :gutter="10" style="width:100%">
                    <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18" style="padding:4px 10px">
                        <router-view />
                    </el-col>

                    <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6"  style="padding:0 10px">
                        <zq-aside> </zq-aside>
                    </el-col>
                </el-row>
            </el-container>
        </el-scrollbar>

    </div>
</template>

<script>
    import zqAside from "./zqAside.vue"
    import zqHeader from "./zqHeader.vue"
    export default {
        name: 'App',
        components: {
            zqAside,
            zqHeader,
        }
    }
</script>