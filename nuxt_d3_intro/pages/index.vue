<template>
  <div>
    <Nav />
    <Header>
      Demo
    </Header>

    <BarChart />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Header from '~/components/Header.vue'
import BarChart from '~/components/BarChart.vue'

export default {
  components: {
    Nav, Header, BarChart
  }
}
</script>

<style>

</style>
