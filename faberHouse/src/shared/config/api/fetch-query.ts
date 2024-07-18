enum enumFetch {
  PROJECT = "PROJECT",
}

export const fetchQuery: Record<enumFetch, string> = {
  [enumFetch.PROJECT]: "project",
};
