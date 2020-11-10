<template>
    <div class="container">
        <div  v-for="(item,index) in titles" :key="index" :class="'box'+(index+1)" class="boxes" @click="select(index)"><div >{{item}}</div></div>
    </div>
</template>

<script>
export default {
    name:'Tiles',
    data:function(){
        return {
            titles:['','一个不大正经的人','','一起学','Python','HTML&CSS','分布式发电技术','JavaScript'],
        }
    },
    methods:{
        select:function(index){
            switch(index){
                case 4:this.$router.push({path:'python'});break;
                case 5:this.$router.push({path:'htmlcss'});break;
                case 6:this.$router.push({path:'generation'});break;
                case 7:this.$router.push({path:'javascript'});break;
                default:break;
            }
        }
    }
}
</script>

<style scoped>
@keyframes enter {
    from{
        opacity: 0;
        transform: translateY(-20px);
    }to{
        opacity: 1;
        transform: translateY(0px);
    }
}
.container{
    animation: enter .5s ease-in-out;
    width: 800px;
    height: 400px;
    /* border: solid rgb(255, 255, 255) 2px; */
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 33.33% 33.33% 33.33%;
    grid-gap: 10px;
    user-select: none;
    transition: all .3s ease-in-out;
    transform: translateY(-10);
}
.boxes{
    background-color:  #e5e9ee;
    color:  #24292b;
    
    font-family: Helvetica;
    font-family: Noto;
    font-size: 25px;
    letter-spacing: 5px;
    line-height: 133.32px;

    border-radius: 5px;

    transition: all .2s ease-in-out;
}
.boxes:hover{
    color: white;
    background-color: rgb(207, 87, 93);
    transform: translateY(-3px);
    box-shadow: 0 2px 10px 5px black ;
}
.box2{
    grid-column-start: 2;
    grid-column-end: 4;
}
.box4{
    grid-row-start: 2;
    grid-row-end: 4;
    writing-mode: vertical-lr;
    text-align: center;
    line-height: 200px;
    letter-spacing: 20px;
    font-size: 40px;
}
.box5{
    grid-column-start: 2;
    grid-column-end: 3;
}
.box6{
    grid-column-start: 3;
    grid-column-end: 5;
}
.box7{
    grid-column-start: 2;
    grid-column-end: 4;
}
</style>