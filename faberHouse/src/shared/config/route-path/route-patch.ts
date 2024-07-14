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
  [enumPath.WORKS]: {
    name: "Наши работы",
    path: "/works",
    fullPath: "/works",
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
};
