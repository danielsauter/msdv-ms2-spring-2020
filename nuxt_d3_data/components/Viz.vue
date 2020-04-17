<template>
  <div>
    <h2>My Viz Component</h2>
    Slider to change color range:<br/>
    <input type="range" min="0.0" max="1.0" step="0.01" v-model="colorOffset"> {{colorOffset}}
    <br>
    <svg
      ref="mySVG"
    ></svg>
    <!-- <div>
      <ul>
        <li v-for="(movie,index) in myData" :key="index">{{movie.title}} ({{movie.release_date}})</li>
      </ul>
    </div>-->
  </div>
</template>

<script>
import populationData from "~/assets/pop.json";
import * as d3 from "d3";

/* https://observablehq.com/@d3/donut-chart */

export default {
  name: "Viz",
  data() {
    return {
      width: 600,
      height: 600,
      colorOffset: 0.1
    };
  },
  props: {
    myData: {
      type: Array,
      required: true
    }
  },
  methods: {
    createChart(){
      const data = populationData;

      const svgDom = this.$refs.mySVG;

      // because this function is called whenever
      // 'colorOffset' changes
      // this will clear all svg children from
      // graph before they are redrawn below
      svgDom.innerHTML = ``;

      // this isn't a "d3" way of doing things though

      const svg = d3
        .select(svgDom)
        .attr("viewBox", [
          -this.width / 2,
          -this.height / 2 - 20,
          this.width,
          this.height + 40
        ])
        .attr("width", '100%')
        .attr("height", this.height);

      svgDom.style.backgroundColor = '#eee';

      const radius = Math.min(this.width, this.height) / 2;

      const arc = d3
        .arc()
        .innerRadius(radius * 0.67)
        .outerRadius(radius - 1);

      const color = d3
        .scaleOrdinal()
        .domain(data.map(d => d.name))
        .range(
          d3
            .quantize(t => d3.interpolateSpectral(t * this.colorOffset + 0.1), data.length)
            .reverse()
        );

      const pie = d3
        .pie()
        .padAngle(0.005)
        .sort(null)
        .value(d => d.value);

      const arcs = pie(data);

      svg
        .selectAll("path")
        .data(arcs)
        .join("path")
        .attr("fill", d => color(d.data.name))
        .attr("d", arc)
        .append("title")
        .text(d => `${d.data.name}: ${d.data.value.toLocaleString()}`);

      svg
        .append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 12)
        .attr("text-anchor", "middle")
        .selectAll("text")
        .data(arcs)
        .join("text")
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .call(text =>
          text
            .append("tspan")
            .attr("y", "-0.4em")
            .attr("font-weight", "bold")
            .text(d => d.data.name)
        )
        .call(text =>
          text
            .filter(d => d.endAngle - d.startAngle > 0.25)
            .append("tspan")
            .attr("x", 0)
            .attr("y", "0.7em")
            .attr("fill-opacity", 0.7)
            .text(d => d.data.value.toLocaleString())
        );
    }
  },
  computed: {},
  mounted() {
    this.createChart()
  },
  watch: {
    /* re-run this.createChart() if change to colorOffset value */
    colorOffset(){
      this.createChart()
    }
  }
};
</script>

<style>
</style>
