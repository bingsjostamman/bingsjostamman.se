const editions = require("../../_data/editions.json");

module.exports = {
  layout: "layouts/edition.njk",
  title: "Bingsjöstämmans 2025",
  year: "2025",
  start: "2025-07-03",
  end: "2025-07-04",
  eleventyComputed: {
    permalink: ({ year }) =>
      year === editions.current ? "/index.html" : `/${year}/index.html`,
    isArchive: ({ year }) => year !== editions.current,
  },
};
