const fetch_data = require("./utils/fetch-data.js");

/*

  What is your data?

*/

(async () => {
  let data = await fetch_data({ writeFile: true });
  console.log(data);
})();
