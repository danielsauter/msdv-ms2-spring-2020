<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p class="measure">{{ description }}</p>
    <Viz/>
  </div>
</template>

<script>
import Viz from '@/components/Viz.vue';
import lorem from '@/plugins/lorem-ipsum.js';

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
body{
  font-family:sans-serif;
}
.container{
  margin:0 auto;
  padding-top:2rem;
  width:100%;
  max-width:700px;
}
.measure {
  max-width: 30em;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
