export interface IRoutePatch {
  name: string;
  patch: string;
  fullPatch: string;
}

export enum enumPatch {
  PROJECTS = "PROJECTS",
  SERVICES = "SERVICES",
  ABOUT = "ABOUT",
  WORKS = "WORKS",
  REVIEWS = "REVIEWS",
  STOCKS = "STOCKS",
  CONTACTS = "CONTACTS",
}
