// Local Node Modules
const path = require("path");
// External Node Modules
const fetch = require("node-fetch");
// Custom Node Modules
const save_data = require("./utils/save_data.js");
const {
  consume_json,
  format_json,
  print_error
} = require("./utils/functions.js");

/*

  What is your data?

*/

(async () => {
  const query_url = "https://ghibliapi.herokuapp.com/films";
  const options = { method: "GET" };

  const filepath = path.join(__dirname, "saved_data", "ghibli_api.json");

  let data = await fetch(query_url, options)
    .then(consume_json)
    .then(format_json)
    .catch(print_error);

  save_data({ json: JSON.stringify(data, null, 2), filepath: filepath });
})();
