<template>
    <div class="rootcontainer">
        <div class="left"></div>
        <div class="right">
            <div class="titlecontainer"></div>
            <div class="articlecontainer"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Page'
}
</script>

<style scoped>
.rootcontainer{
    width: 95vw;
    height: 90vh;
    position: relative;
    margin: auto;
    top: 5vh;
}
.left{
    width: 15%;
    height: 95%;
    background-color: white;
    position: absolute;
    top: 2.5%;
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
    width: 100%;
    height: 87%;
    position: absolute;
    top: 13%;
    border-radius: 15px;
}
</style>