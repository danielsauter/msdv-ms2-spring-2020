const fs = require("fs");

async function writeJSON({ json, filepath } = {}) {
  if (!filepath || !json) {
    let err = `Could not write file.
JSON is ${json}
Filepath is ${filepath}`;
    throw new Error(err);
    return false;
  }

  await fs.writeFile(filepath, json, { encoding: "utf-8" }, err => {
    if (err) throw err;
    console.log("File has been saved to: " + filepath);
  });
}

module.exports = writeJSON;
