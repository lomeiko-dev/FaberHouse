enum enumFetch {
  PROJECT = "PROJECT",
  OFFERS = "OFFERS",
  REVIEW = "REVIEW",
  STOCK = "STOCK",
  CONTACT = "CONTACT",
  SERVICE = "SERVICE",
}

export const fetchQuery: Record<enumFetch, string> = {
  [enumFetch.PROJECT]: "project",
  [enumFetch.OFFERS]: "offers",
  [enumFetch.REVIEW]: "reviews",
  [enumFetch.STOCK]: "stocks",
  [enumFetch.CONTACT]: "contacts",
  [enumFetch.SERVICE]: "services",
};
