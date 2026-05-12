export default {
  year: "2026",
  start: "2026-06-30T16:00:00+02:00",
  end: "2026-07-02T02:00:00+02:00",
  eleventyComputed: {
    isArchive: ({ year, editions }) => String(year) !== String(editions.current),
  },
};