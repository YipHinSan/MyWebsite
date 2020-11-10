<template>
    <div class="container"><p><slot></slot></p></div>
</template>

<script>
export default {
    name:'list',
    data:function(){
        return{
            isfocus:0
        }
    },
    methods:{
        select:function(){
            alert('focus!')
        }
    }
}
</script>

<style scoped>
p{
    margin: 0;
    padding: 0 20px 0 20px;
}
.container{
    background-color: white;
    width: 100%;
    height: 40px;
    margin: 0 0 10px 0;
    border-radius: 15px;
    line-height: 40px;
    text-align: start;
    color: black;
    font-size: 18px;
    font-family: Helvetica;
    letter-spacing: 3px;
    transition: all .2s ease-in-out;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
}
.container:hover{
    background-color: rgb(207, 87, 93);
    color: white;
}

</style>