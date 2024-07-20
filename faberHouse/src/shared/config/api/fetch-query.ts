enum enumFetch {
  PROJECT = "PROJECT",
  OFFERS = "OFFERS",
}

export const fetchQuery: Record<enumFetch, string> = {
  [enumFetch.PROJECT]: "project",
  [enumFetch.OFFERS]: "offers",
};
