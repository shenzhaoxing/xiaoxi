<template>
    <div class="xiao">
        <div class="head">
            <h2>我的</h2>
        </div>
        <div class="main">

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
    .xiao{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .head{
            width: 100%;
            height: 50px;
            background: skyblue;
            color: #fff;
            text-align: center;
            line-height: 50px;
        }
        .main{
            flex: 1;
            overflow: auto;
        }
    }
</style>
