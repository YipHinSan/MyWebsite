<template>
  <div class="about">
    <Tiles></Tiles>
  </div>
</template>

<script>
import Tiles from '../components/Tiles'

export default {
  name:'Index',
  components:{
    Tiles
  },
  data:function(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style scoped>
.about{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

