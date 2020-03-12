// element
// data

const vm = new Vue({
  el: "#app",
  data: {
    pageTitle: "Vue.js Bar Chart Example",
    pageSubTitle: "Example Code",
    spacing: "40",
    barData: [
      { name: "Robin", value: 1, color: "#f36e62" },
      { name: "Marisa", value: 2, color: "#ffc101" },
      { name: "Neil", value: 3, color: "#6c5aa6" },
      { name: "Dan", value: 20, color: "#3f3247" },
      { name: "Nour", value: 200, color: "#aaaaaa" }
    ],
    paragraph:
      "Hello, <i>World</i> &mdash; <a href='#hello'>This is a link</a> &plus; it looks nice."
  },
  computed: {
    chartHeight() {
      return 300;
    },
    chartWidth() {
      return this.barData.length * this.step;
    }
  },
  methods: {
    getBarHeight(value) {
      return Math.sqrt(value) * 10;
    },
    changeTitle(string) {
      this.pageTitle = string;
    }
  },
  mounted() {
    // life cycle event that fires when
    // Vue App is mounted to the DOM
    this.$refs.chart.style.backgroundColor = "#fff";
  }
});
