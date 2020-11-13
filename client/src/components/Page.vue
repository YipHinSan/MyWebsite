<template>
    <div class="rootcontainer" >
        <div class="home" @click="gohome"><div>HOME</div></div>
        <div class="left"><list v-for="(item,index) in indexlist" :key="index" @click.native="getarticle(index+1)" :class="{select:isselect[index]}" >{{item.title}}</list></div>
        <div class="right">
            <div class="titlecontainer" ><h1>{{title}}</h1></div>
            <div class="articlecontainer" ><div class="text" v-html="article"></div></div>
        </div>
    </div>
</template>

<script>
import list from './child/list'
import axios from 'axios'


export default {
    name:'Page',
    components:{
        list
    },
    props:['docsname'],
    data:function(){
        return{
            num:10,
            indexlist:[],
            title:'',
            article:'',
            isget:true,
            isselect:[]
        }
    },
    created(){
        this.init();
    },
    methods:{
        gohome:function(){
            this.$router.push('/index');
        },
        load:function(){
            axios.get(this.docsname)
                .then(res=>{
                    let data=res.data;
                    this.indexlist=data;
                    // this.article=data.article;
                });
            this.isget=!this.isget;
        },
        init:function(){
            axios.get(this.docsname).then(res=>{
                let data=res.data;
                this.indexlist=data;
                for(let index in this.indexlist){
                    this.isselect[index]=false;
                }
                this.getarticle(1);
            });
        },
        getarticle:function(index){
            axios.get(this.docsname+'?id='+index)
                .then(res=>{
                    let data=res.data;
                    this.article=data.article;
                    this.title=data.title;
                });
            for(let i in this.isselect){
                this.isselect[i]=false;
                if (i==index-1){
                    this.isselect[i]=true;
                }
            }
            
        }
    },
    
    
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
    width: 92%;
    height: 10%;
    border-radius: 15px;
    font-size: 25px;
    line-height: 25px;
    text-align: start;
    padding: 0 4% 0 4%;

    display: flex;
    align-items: center;
}
h1{
    font-size: 25px;
}
.articlecontainer{
    background-color: white;
    width: 96%;
    height: 87%;
    position: absolute;
    top: 13%;
    border-radius: 15px;
    text-align: start;
    padding: 0 0 0 4%;
    overflow: hidden;
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
.text{
    width: 97%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: 3%;
}
.select{
    background-color: rgb(145, 70, 73);
    color: white;
}
</style>