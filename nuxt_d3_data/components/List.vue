<template>
  <div>
    <ul>
      <li v-for="(movie,index) in myData" :key="index">{{movie.title}} ({{movie.release_date}})</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {}
  },
  props: {
    myData: {
      type: Array,
      required: true
    }
  },
  methods: {},
  computed: {},
  mounted() {}
};
</script>

<style>
</style>
