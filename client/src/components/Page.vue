<template>
    <div class="rootcontainer">
        <div class="home" @click="gohome"><div>HOME</div></div>
        <div class="left"><list>前言</list></div>
        <div class="right">
            <div class="titlecontainer"></div>
            <div class="articlecontainer" v-html="doc"></div>
        </div>
    </div>
</template>

<script>
import list from './child/list'
import axios from 'axios'

axios.get('/getarticle').then(res=>{
    let data=res.data;
    console.log(data);
    let doc=document.querySelector('.articlecontainer');
    doc.innerHTML=data;
})

export default {
    name:'Page',
    components:{
        list
    },
    data:function(){
        return{
        }
    },
    methods:{
        gohome:function(){
            this.$router.push('/index');
        }
    }
}
</script>

<style scoped>
li{
    list-style: none;
    margin: 0;
    padding: 0;
}
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
.rootcontainer{
    width: 95vw;
    height: 90vh;
    position: relative;
    margin: auto;
    top: 5vh;
    animation: enter .5s ease-in-out;
}
.left{
    width: 15%;
    height: 70%;
    /* background-color: white; */
    position: absolute;
    top: 15%;
    left: 2.5%;
    border-radius: 15px;
}
.right{
    width: 77%;
    height: 95%;
    /* border: 2px white solid; */
    position: absolute;
    left: 20%;
    top: 2.5%;
}
.titlecontainer{
    background-color: white;
    width: 100%;
    height: 10%;
    border-radius: 15px;
}
.articlecontainer{
    background-color: white;
    width: 90%;
    height: 87%;
    position: absolute;
    top: 13%;
    border-radius: 15px;
    text-align: start;
    overflow-y: scroll;
    padding: 0 5% 0 5%;
}
.home{
    width: 15%;
    height: 10%;
    background-color: rgb(207, 87, 93);
    position: absolute;
    left: 2.5%;
    top: 2.5%;
    border-radius: 15px;
    color: white;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 5px;
    font-size: 30px;
    font-weight: bold;
    user-select: none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    overflow: hidden;
}
.home:hover{
    transform: translateY(-3px);
    box-shadow: 0 2px 10px 2px black ;
}
</style>