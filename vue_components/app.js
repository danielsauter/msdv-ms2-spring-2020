Vue.component("vue-button", {
  data: function() {
    return {
      isVisible: false
    };
  },

  props: {
    text: String,
    color: String
  },

  methods: {
    toggle: function() {
      this.isVisible = !this.isVisible;
    }
  },

  template: "#vue-button-template"
});

// Initalize Vue
new Vue({
  el: "#app",
  data: {
    title: "Hello!",
    dropDownOptions: [
      {
        value: "What time is it?",
        color: "#f36e62"
      },
      {
        value: "When are we meeting?",
        color: "rgb(112, 170, 72)"
      },
      {
        value: "Where are you located?",
        color: "#6c5aa6"
      },
      {
        value: "Is anything real?",
        color: "#3f3247"
      }
    ]
  }
});
