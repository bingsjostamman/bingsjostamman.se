function slugify(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/å/g, "a")
    .replace(/ä/g, "a")
    .replace(/ö/g, "o")
    .replace(/[^\w]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getEditionPermalink({ page, year, editions, artist, draft }) {
  if (draft) {
    return false;
  }

  const archivePrefix = String(year) === String(editions.current) ? "" : `/${year}`;

  switch (page?.fileSlug) {
    case "index":
      return `${archivePrefix}/index.html`;
    case "lineup":
      return `${archivePrefix}/scen/index.html`;
    case "tuesday":
      return `${archivePrefix}/tisdag/index.html`;
    case "wednesday":
      return `${archivePrefix}/onsdag/index.html`;
    case "allspel":
      return `${archivePrefix}/allspel/index.html`;
    case "workshops":
      return `${archivePrefix}/kurser/index.html`;
    case "schedule":
      return `${archivePrefix}/spelscheman/index.html`;
    case "artists":
      return `${archivePrefix}/scen/${slugify(artist?.name || "unknown")}/index.html`;
    default:
      return false;
  }
}

export default {
  year: "2026",
  start: "2026-06-30T16:00:00+02:00",
  end: "2026-07-02T02:00:00+02:00",
  eleventyComputed: {
    isArchive: ({ year, editions }) => String(year) !== String(editions.current),
    permalink: getEditionPermalink,
  },
};