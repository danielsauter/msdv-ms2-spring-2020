const fs = require("fs");

async function save_data({ json, filepath } = {}) {
  if (!filepath || !json) {
    let err = `Could not write file.\n`;
    err += `JSON is ${json}\n`;
    err += `Filepath is ${filepath}`;

    throw new Error(err);
    return false;
  }

  await fs.writeFile(filepath, json, { encoding: "utf-8" }, err => {
    if (err) throw err;
    console.log("File has been saved to: " + filepath);
  });
}

module.exports = save_data;
