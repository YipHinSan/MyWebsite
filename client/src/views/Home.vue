<template>
    <div class="container">
    <div class="hi">
        <h1>Hi</h1>
        <p><ul><li v-for="(item,i) in title" :key="i"><span>{{item}}</span></li></ul></p>
        <button @click="turn">GO</button>
    </div>
    </div>
</template>

<script>
export default {
    name:'Home',
    data:function(){
        return{
            title:'欢迎来到我的主站'
        }
    },
    methods:{
        turn:function(){
            this.$router.push({path:'about'})
        }
    }
}
</script>

<style scoped>
ul,li{
    list-style: none;
    margin: 0;
    padding: 0;
}
ul{
    display: flex;
    justify-content: space-around;
    width: 400px;
    align-items: flex-end;
    height: 55px;
}
.container{
    min-height: 100vh;
    max-height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    user-select: none;
}
.hi{
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
}
h1{
    color: rgb(207, 87, 93);
    font-size: 200px;
    letter-spacing: 20px;
    margin: 0;
}
p{
    color: white;
    letter-spacing: 10px;
    font-size: 40px;
    line-height: 55px;
}
span{
    transition: all 0.05s ease-in-out;
}
span:hover{
    font-size: 50px;
}
button{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: rgb(207, 87, 93);
    color: white;
    border:none;
    text-align: center;
    line-height: 70px;
    outline: none;
    font-size: 20px;
}
button:hover{
    cursor: pointer;
}
</style>