<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p class="measure">{{ description }}</p>
    <Viz/>
  </div>
</template>

<script>
import Viz from '../components/Viz.vue';
import lorem from '../plugins/lorem-ipsum.js';

export default {
  components: {
    Viz
  },
  data(){
    return {
      title: "Hello, World",
      description: lorem
    }
  }
}
</script>

<style>
.container{
  margin:0 auto;
  padding-top:2rem;
  width:100%;
  max-width:700px;

  font-family:sans-serif;
}
.measure {
  max-width: 30em;
}
</style>
