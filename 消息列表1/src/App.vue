<template>
    <div class="box">
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="foot">
            <ul>
                <router-link to='/xiao' active-class="active">消息</router-link>
                <router-link to='/my' active-class="active">我的</router-link>
                <router-link to='/kong' active-class="active">空间</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    .box{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .main{
            flex: 1;
            overflow: auto;
        }
        .foot{
            width: 100%;
            height: 50px;
            ul{
                width: 100%;
                height: 100%;
                a{
                    text-decoration: none;
                    color: #000;
                    width: 33%;
                    height: 100%;
                    display: inline-block;
                    text-align: center;
                    line-height: 50px;
                }
                .active{
                    background: skyblue;
                    color: #fff;
                }
            }
        }
    }
</style>
