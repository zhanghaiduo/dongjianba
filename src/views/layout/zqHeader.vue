<template>
    <div>
        <el-header>
            <div class="container">
                <h1><img width="58" src="../../assets/images/logo.png" alt=""></h1>
                <a href="javascript:;" class="color333 fs18 pull-left"><i class="el-icon-loading"></i> 首页</a>
                <a href="javascript:;" class="color333 fs18 pull-left"><i class="el-icon-view"></i> 发现</a>
                <a href="javascript:;" class="color333 fs18 pull-left"><i class="el-icon-news"></i> 话题</a>
                <el-input size="small" class="w160 pull-left hidden-sm-and-down" placeholder="搜索啊" prefix-icon="el-icon-search"></el-input>
                <el-dropdown class="hidden-sm-and-down">
                    <a href="javascript:;" type="text" class="color333 fs18">张琪</a>&#x3000;
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-button class="hidden-sm-and-down" type="danger" round><i class="el-icon-edit"></i> 写文章</el-button>
            </div>
        </el-header>

    </div>
</template>
<script>
    import 'element-ui/lib/theme-chalk/display.css';
    export default {

    }

</script>
<style>
    .el-header {
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        z-index: 1500;
        background: #fff;
        line-height: 60px;
        border-bottom: 1px solid #eee;

    }

    .el-header a {
        margin-right: 20px
    }

    .el-header h1 {
        margin: 0;
        float: left;
        font-size: 32px;
        font-weight: 400;
    }
</style>