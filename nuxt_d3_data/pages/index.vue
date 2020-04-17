<template>
  <section>
    <div class="pad">
      <h1>My Project</h1>
    </div>

    <div class="pad">
      <h2>Lists</h2>
      <p>Movies before 2000:</p>
      <List :myData="indexPageData.filter(i=>i.release_date < 2000)"/>
      <p>Movies after 2000:</p>
      <List :myData="indexPageData.filter(i=>i.release_date >= 2000)"/>
    </div>

    <div class="pad">
      <Viz/>
    </div>
    </div>
  </section>
</template>

<script>
import films from "~/assets/films.json";
import List from "~/components/List.vue";
import Viz from "~/components/Viz.vue";

export default {
  data() {
    return {
      indexPageData: [],
      filmData: films
    };
  },
  components: {
    List, Viz
  },
  mounted() {
    fetch("https://ghibliapi.herokuapp.com/films", { method: "GET" })
      .then(res => res.json())
      .then(json => {
        this.indexPageData = json;
      });
  }
};
</script>

<style>
div.pad{
  padding-bottom:3rem;
}
p{
  padding-top:0.5em;
  padding-bottom:1em;
}
</style>
