export default {
  year: "2024",
  start: "2024-07-04",
  end: "2024-07-05",
  eleventyComputed: {
    isArchive: ({ year, editions }) => String(year) !== String(editions.current),
  },
};