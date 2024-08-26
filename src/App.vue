<template>
  <CapaSite :capa="capafilme"/>
  <router-view></router-view>
  
</template>

<script>
import CapaSite from './components/CapaSite.vue';
export default {
  name: 'App',
  components: {
    CapaSite,
  },

  data(){
    return{
      capafilme: './img/capafilme.jpg'
    }
  }
}
</script>

<style>
body{
  background-color: black;
  margin: 0;

}

*{
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 600;
}
</style>
