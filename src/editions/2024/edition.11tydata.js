const editions = require("../../_data/editions.json");

module.exports = {
  layout: "layouts/edition.njk",
  title: "Bingsjöstämmans 2024",
  year: "2024",
  start: "2024-07-04",
  end: "2024-07-05",
  eleventyComputed: {
    permalink: ({ year }) =>
      year === editions.current ? "/index.html" : `/${year}/index.html`,
    isArchive: ({ year }) => year !== editions.current,
  },
};
