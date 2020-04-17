<template>
  <div class="barchartcontainer" ref="container">
    Chart Height:
    <div style="display:flex;margin:0;padding:0;">
      <input type="range" min="200" max="600" v-model="height" class="slider" id="myRange">
      <span style="margin-left:0.5em">{{height}}</span>
    </div>
    <svg
      ref="viz"
      :viewBox="[0, 0, width, height]"
      :width="width"
      :height="height"
      >
      <g>
        <g
          v-for="({YEAR,TOTAL},i) in viz_data"
          :key="i"
        >
        <rect
          :x="xScale(YEAR)"
          :y="margin.top + (height - yScale(TOTAL) - margin.bottom)"
          :width="xScale.bandwidth() * 0.8"
          :height="yScale(TOTAL) - margin.top"
          :fill="color(TOTAL)"
        />
        </g>
      </g>

      <g>
        <!-- X AXIS -->
        <g
          v-for="({YEAR},i) in viz_data"
          :key="i"
          :transform="`translate(${xScale(YEAR)+(xScale.bandwidth())*0.5}, ${height-margin.bottom + 20})`"
        >
        <text
          font-size="0.8em"
          text-anchor="middle"
          transform="rotate(-45)"
        >{{YEAR}}</text>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import * as d3 from 'd3'
import csvdata from '~/assets/sample_data.csv'

export default {
  name: "BarChart",
  data(){
    return {
      margin: {
        top: 50,
        left: 0,
        right: 0,
        bottom: 50
      },
      height: 0,
      width: 0,
      yExtent: [],
      xExtent: []
    }
  },
  mounted(){
    this.width = this.$refs.container.offsetWidth - 40
    this.height = 500

    console.log(this.viz_data);

    console.log( d3.interpolateSpectral(1.0) )

    let svg = d3.select(this.$refs.viz)

    this.xExtent = d3.extent(this.viz_data, d=>d.YEAR)
    this.yExtent = d3.extent(this.viz_data, d=>d.TOTAL)

    window.addEventListener('resize', ()=>{
      this.width = this.$refs.container.offsetWidth - 40
      this.height = 500
    })
  },
  methods: {
    color(value){
      return d3.interpolateSpectral(0.2 + value / d3.max(this.viz_data, d=>d.TOTAL))
    }
  },
  computed: {
    viz_data(){
      return d3.csvParse(csvdata)
    },
    xScale(){
      return d3
        .scaleBand()
        .domain(this.viz_data.map(d => d.YEAR ))
        .range([this.margin.left, this.width - this.margin.right])
    },
    yScale(){
      return d3
      .scaleLinear()
      .domain(d3.extent(this.viz_data, d => d.TOTAL))
      .nice()
      .range([this.height - this.margin.bottom, this.margin.top])
    }
  }
}
</script>

<style scoped>
div{
  margin-top: 3rem;
  padding:0 20px;
}
</style>
