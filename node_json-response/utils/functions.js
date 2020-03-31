const consume_json = res => {
  if (res.status != "200") {
    throw new Error(res.status + " " + res.statusText);
  }
  return res.json();
};

const format_json = json => {
  let map_entries = entry => {
    return {
      title: entry.title,
      year: entry.release_date,
      score: entry.rt_score
    };
  };

  let sort_entries = (a, b) => b.year - a.year;

  return {
    metadata: {
      timestamp: new Date()
    },
    data: json.map(map_entries).sort(sort_entries)
  };
};

const print_error = err => {
  console.error(err);
};

module.exports = { consume_json, format_json, print_error };
