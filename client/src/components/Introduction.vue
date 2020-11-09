<template>
    <div class="app">
        <div class="box first">Hi</div>
        <div class="box">I'm</div>
        <div class="box">Jip</div>
        <div class="box">HinSan</div>
    </div>
</template>

<script>
export default {
    name:'Introduction',
    
}
</script>

<style scoped>
.app{
    display: grid;
    grid-template-rows: 200px 200px;
    grid-template-columns: 200px 200px;
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    cursor:default;
    user-select: none;
}
.box{
    background-color: rgb(255, 255, 255);
    font-size: 50px;
    text-align: center;
    line-height: 200px;
    border-radius: 10px;
    transition: all 0.1s;
}
.first{
    background-color: rgb(214, 50, 85);
    color: white;
    font-size: 120px;
    font-family: Arial, Helvetica, sans-serif;
}
.box:hover{
    transform: scale(1.2);
}
</style>