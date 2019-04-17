<template>
    <el-aside style="background-color: rgb(238, 241, 246);width: 200px">
        <div class="side-nav">
            <ul v-for="(item,index) in list">
                <li class="nav-item">
                    <a class="big-title">{{item.name}}</a>
                    <div class="nav-group">
                        <span class="nav-title">Basic</span>
                        <!-- <ul class="pure-menu-list">
                            <router-link :to="{path:'/basic/index/1'}" :key="c_index" v-for="(c_item,c_index) in item.children">
                                <li class="nav-item">{{c_item.name}}</li>
                            </router-link>
                        </ul> -->
                        <!-- :class="(item.path+'/'+c_item.path)==$route.path ?'active':''" -->
                        <ul class="pure-menu-list">
                            <div v-for="(c_item,c_index) in item.children">
                                <li class="nav-item" @click="menuClick(c_item)">{{c_item.name}}</li>
                            </div>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </el-aside>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'zqAside',
        data() {
            return {
                baseUrl: 'http://127.0.0.1:3000',
                list: [],
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            menuClick(row) {
                // this.$store.state.content = row

            },
            toTree(data) {
                // 删除 所有 children,以防止多次调用
                data.forEach(function (item) {
                    delete item.children;
                });

                // 将数据存储为 以 id 为 KEY 的 map 索引数据列
                var map = {};
                data.forEach(function (item) {
                    map[item.id] = item;
                });
                //        console.log(map);

                var val = [];
                data.forEach(function (item) {

                    // 以当前遍历项，的pid,去map对象中找到索引的id
                    var parent = map[item.parent_id];

                    // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
                    if (parent) {

                        (parent.children || (parent.children = [])).push(item);

                    } else {
                        //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
                        val.push(item);
                        // console.log(item)

                    }
                });

                return val;
            },
            // 列表获取
            fetchData() {

                axios.post(`${this.baseUrl}/article/list`, { data: this.formInline }).then((res) => {
                    // console.log(res.data.list)
                    this.$store.state.all_list.push(...res.data.list)
                    this.$store.state.base_list = this.toTree(res.data.list);
                    this.list = this.$store.state.base_list;
                })
            },
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .nav-item {
        list-style-type: none;
        font-size: 14px;
        color: #555
    }

    .nav-item:hover {
        color: #409eff
    }

    .pure-menu-list .nav-item {
        position: relative;
        right: 40px;
        margin-top: 8px
    }
</style>