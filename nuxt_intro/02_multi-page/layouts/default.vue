<template>
  <div class="default_container">
    <nav>
      <nuxt-link to="/" class="button--green">Home</nuxt-link>
      <nuxt-link to="/about" class="button--green">About</nuxt-link>
    </nav>
    <nuxt />
    <div style="margin-top:3rem">
      <form  v-on:submit="search">
      <input type="text" ref="searchfield"/>
      <input value="Search" type="submit"/>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    search(e){
      e.preventDefault();
      let value = this.$refs.searchfield.value;
      this.$router.push({
        path: '/search/' + value
      });
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

body{
  font-family:sans-serif;
}
.default_container{
  margin:0 auto;
  padding-top:2rem;
  width:100%;
  max-width:700px;
}
.measure {
  max-width: 30em;
}
</style>
