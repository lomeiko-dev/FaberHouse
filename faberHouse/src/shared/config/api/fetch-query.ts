enum enumFetch {
  PROJECT = "PROJECT",
  OFFERS = "OFFERS",
  REVIEW = "REVIEW",
}

export const fetchQuery: Record<enumFetch, string> = {
  [enumFetch.PROJECT]: "project",
  [enumFetch.OFFERS]: "offers",
  [enumFetch.REVIEW]: "reviews",
};
