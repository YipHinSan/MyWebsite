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
@font-face {
  font-family: "SYST";
  src: url("./assets/SourceHanSerifSC-Bold.ttf");
}

@keyframes enter {
    from{
        opacity: 0;
        transform: translateY(-20px);
    }to{
        opacity: 1;
        transform: translateY(0px);
    }
}


/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
	width: 5px;
	height: 5px;
  background-color: #ffffff00;
}
 
/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track
{
	background-color: none;
}
 
/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	background-color:  rgb(207, 87, 93);
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
