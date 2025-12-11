const editions = require("../../_data/editions.json");

module.exports = {
  layout: "layouts/edition.njk",
  title: "Bingsjöstämmans 2026",
  year: "2026",
  start: "2026-07-08",
  end: "2026-07-09",
  eleventyComputed: {
    permalink: ({ year }) =>
      year === editions.current ? "/index.html" : `/${year}/index.html`,
    isArchive: ({ year }) => year !== editions.current,
  },
};
