export default {
  year: "2025",
  start: "2025-07-03",
  end: "2025-07-04",
  eleventyComputed: {
    isArchive: ({ year, editions }) => String(year) !== String(editions.current),
  },
};