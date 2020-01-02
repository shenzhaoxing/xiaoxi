<template>
    <div class="xiao">
        <div class="head">
            <h2>消息</h2>
        </div>
        <div class="main">
            <nav><input type="text" v-model="val" placeholder="搜索"/></nav>
            <ul>
                <li v-for="(item,index) in list" :key='index'>
                    <img src='/img/item.img'/>
                    <p>
                        <span class="span1">{{item.name}}</span><br/>
                        <span class="span2">{{item.xiao}}</span>
                    </p>
                    <p>{{item.time}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            val:'',
            list:''
        }
    },
    created(){
        axios.get('/getlist').then((res)=>{
            this.list=res.data.list
        })
    }
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
            nav{
                width: 100%;
                height: 40px;
                display: flex;
                justify-content: center;
                margin-top: 5px;
                input{
                    width: 90%;
                    height: 100%;
                    background: #ccc;
                    border: 0;
                    border-radius: 20px;
                    outline: none;
                    text-align: center;
                }
            }
            ul{
                width: 100%;
                li{
                    width: 100%;
                    height: 100px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .span1{
                        font-weight: bold;
                    }
                    .span2{
                        font-size: 12px
                    }
                }
            }
        }
    }
</style>
