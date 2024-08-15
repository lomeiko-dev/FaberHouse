export interface IRoutePath {
  name?: string;
  path: string;
  fullPath: string;
}

export enum enumPath {
  HOME = "HOME",
  PROJECTS = "PROJECTS",
  SERVICES = "SERVICES",
  ABOUT = "ABOUT",
  REVIEWS = "REVIEWS",
  STOCKS = "STOCKS",
  STOCK_DETAIL = "STOCK_DETAIL",
  PROJECT_DETAIL = "PROJECT_DETAIL",
  CONTACTS = "CONTACTS",
  QUESTION = "QUESTION",
  NEWS = "NEWS",
  NEWS_DETAIL = "NEWS_DETAIL",
  NOT_FOUND = "NOT_FOUND",
}
