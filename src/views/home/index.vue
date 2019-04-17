<template>
    <div>
        <el-carousel>
            <el-carousel-item v-for="item in 4" :key="item">
            </el-carousel-item>
        </el-carousel>

        <div class="tag-container">
            <el-tag>标签一</el-tag>
            <el-tag type="success">标签二</el-tag>
            <el-tag type="info">标签标签三</el-tag>
            <el-tag type="warning">标签标签四</el-tag>
            <el-tag type="danger">标签标签五</el-tag>
            <el-tag type="success">标签标签二</el-tag>
            <el-tag type="info">标签标签三</el-tag>
            <el-tag type="warning">标签标签四</el-tag>
            <el-tag type="danger">标签五</el-tag>
            <div>
                <el-button type="text" class="pull-right">更多热门专题 <i class="el-icon-arrow-right"></i></el-button>
            </div>
        </div>

        <ul class="note-list">
            <li v-for="item in 6">
                <a href="javascript:;" class="big-title">标题{{item}}</a>
                <p class="abstract">表弟是体制内的成员，现在快速成长为很受上级领导器重的年轻干部，手下好多五十岁左右的老油条，被这个88年的小年轻人“治理”得服服帖帖。现在快速成长为很受上级领导器重的年轻干部，手下好多五十岁左右的老油条。我每次去他手下好多五十岁左右的老油条。我每次去他手下好多五十岁左右的老油条。我每次去他</p>
                <div class="meta">
                    <a href="javascript:;">张琪</a>
                    <a href="javascript:;"><i class="el-icon-edit-outline">555</i></a>
                    <a href="javascript:;"><i class="el-icon-star-on">6</i></a>
                </div>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        data() {
            return {
            }
        },
        created() {
        },
    };
</script>
<style>
    .meta {
        padding-right: 0 !important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    }

    .meta a {
        margin-right: 10px;
        color: #b4b4b4;
    }

    .abstract {
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }

    .note-list p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .note-list li {
        position: relative;
        width: 100%;
        padding: 0px 0px 20px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
    }

    .tag-container {
        margin: 15px 0;
        overflow: hidden;
        border-bottom: 1px solid #eee;
    }

    .tag-container .el-tag {
        margin: 2px 0;
    }

    .el-carousel {
        border-radius: 4px
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>