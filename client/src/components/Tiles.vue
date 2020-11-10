<template>
    <div class="container">
        <div  v-for="(item,index) in titles" :key="index" :class="'box'+(index+1)" class="boxes"><div >{{item}}</div></div>
    </div>
</template>

<script>
export default {
    name:'Tiles',
    data:function(){
        return {
            titles:['','一个不大正经的人','','一起学','Python','HTML&CSS','分布式发电与微电网技术','JavaScript'],
        }
    }
}
</script>

<style scoped>
.container{
    width: 800px;
    height: 400px;
    /* border: solid rgb(255, 255, 255) 2px; */
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 33.33% 33.33% 33.33%;
    grid-gap: 10px;
}
.boxes{
    background-color:  #e5e9ee;
    color:  #24292b;
    font-family: Noto;
    font-size: 25px;
    letter-spacing: 5px;
    line-height: 133.32px;
}
.box2{
    grid-column-start: 2;
    grid-column-end: 4;
}
.box4{
    grid-row-start: 2;
    grid-row-end: 4;
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