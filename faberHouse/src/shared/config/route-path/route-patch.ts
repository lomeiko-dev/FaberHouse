import { IRoutePath, enumPath } from "./types";

export const RoutePath: Record<enumPath, IRoutePath> = {
  [enumPath.HOME]: {
    path: "/home",
    fullPath: "/home",
  },
  [enumPath.PROJECTS]: {
    name: "Проекты домов",
    path: "/projects",
    fullPath: "/projects",
  },
  [enumPath.SERVICES]: {
    name: "Услуги",
    path: "/services",
    fullPath: "/services",
  },
  [enumPath.ABOUT]: {
    name: "О компании",
    path: "/about",
    fullPath: "/about",
  },
  [enumPath.NOT_FOUND]: {
    path: "*",
    fullPath: "*",
  },
  [enumPath.REVIEWS]: {
    name: "Отзывы",
    path: "/reviews",
    fullPath: "/reviews",
  },
  [enumPath.STOCKS]: {
    name: "Акции",
    path: "/stocks",
    fullPath: "/stocks",
  },
  [enumPath.CONTACTS]: {
    name: "Контакты",
    path: "/contacts",
    fullPath: "/contacts",
  },
  [enumPath.STOCK_DETAIL]: {
    path: "/stock",
    fullPath: "/stock/:id",
  },
  [enumPath.QUESTION]: {
    path: "/question",
    fullPath: "/question",
  },
  [enumPath.NEWS]: {
    path: "/news",
    fullPath: "/news",
  },
  [enumPath.NEWS_DETAIL]: {
    path: "/news",
    fullPath: "/news/:id",
  },
  [enumPath.PROJECT_DETAIL]: {
    path: "/project",
    fullPath: "/project/:id",
  },
};
