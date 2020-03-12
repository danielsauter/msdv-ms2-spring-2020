/* built in modules */
const path = require("path");

/* modules from NPM */
const fetch = require("node-fetch");

/* modules locally on our system */
const writeJSON = require("./write-json.js");

let query_url = "https://ghibliapi.herokuapp.com/films";
let options = { method: "GET" };

let fetch_data = async ({ writeFile } = {}) => {
  let json = await fetch(query_url, options)
    .then(res => {
      /*

      res is shorthand for "response"

    */
      /*

      If response does not provide a code of 200,
      then throw and error and stop moving forward
      in script

    */
      if (res.status != "200") {
        throw new Error(res.status + " " + res.statusText);
      }
      return res.json();
    })
    .then(json => {
      /*

      Perform your data manipulations from API response here.

    */
      /*

      This is a lambda function that allows use to
      return an object with only the values we want
      to save and keep

    */
      let map_entries = entry => {
        return {
          title: entry.title,
          year: entry.release_date,
          score: entry.rt_score
        };
      };

      /*

      This is a lamda function that sorts our
      resulting objects by year.

    */
      let sort_entries = (a, b) => {
        return b.year - a.year;
      };

      let final_json = {
        metadata: {
          timestamp: new Date()
        },
        data: json.map(map_entries).sort(sort_entries)
      };

      let json_string = JSON.stringify(final_json, null, 2);

      /*

      At the top of this file, we import a module called "writeJSON"
      which takes in an object with two parameters, our JSON data as
      a string and our filepath for where we want to save our file.

    */

      if (writeFile === true) {
        let filepath = path.join(__dirname, "..", "data", "ghibli_api.json");
        writeJSON({ json: json_string, filepath: filepath });
      }

      return json_string;
    })
    .catch(err => {
      /*

      err is shorthand for "error"

    */
      /*

      If any errors are thrown in our steps above,
      this block will "catch" them and print it to
      the console.

    */
      console.error(err);
    });

  return json;
};

module.exports = fetch_data;
