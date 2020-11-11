<template>
  <div id="app">
    <div id="nav">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  components:{
    
  },
}
</script>

<style>
<<<<<<< HEAD
@font-face {
  font-family: "SYST";
  src: url("./assets/SourceHanSerifSC-Bold.ttf");
}

=======
/* @font-face {
  font-family: plantc;
  src: url("./assets/plantc.ttf");
} */
>>>>>>> 5033591cfe7f0c9f01d222412379c21239cd53a0
@keyframes enter {
    from{
        opacity: 0;
        transform: translateY(-20px);
    }to{
        opacity: 1;
        transform: translateY(0px);
    }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif,Tahoma,"Heiti SC","Microsoft YaHei","WenQuanYi Micro Hei","PingFang SC","Hiragino Sans GB";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  background-color: #24292b;
  margin: 0;
  padding: 0;
}
#nav {
  padding: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
