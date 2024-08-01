enum enumFetch {
  PROJECT = "PROJECT",
  OFFERS = "OFFERS",
  REVIEW = "REVIEW",
  STOCK = "STOCK",
}

export const fetchQuery: Record<enumFetch, string> = {
  [enumFetch.PROJECT]: "project",
  [enumFetch.OFFERS]: "offers",
  [enumFetch.REVIEW]: "reviews",
  [enumFetch.STOCK]: "stocks",
};
