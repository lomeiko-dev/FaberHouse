import { enumPatch, IRoutePatch } from "./types";

export const RoutePatch: Record<enumPatch, IRoutePatch> = {
  [enumPatch.PROJECTS]: {
    name: "Проекты домов",
    patch: "/projects",
    fullPatch: "/projects",
  },
  [enumPatch.SERVICES]: {
    name: "Услуги",
    patch: "/services",
    fullPatch: "/services",
  },
  [enumPatch.ABOUT]: {
    name: "О компании",
    patch: "/about",
    fullPatch: "/about",
  },
  [enumPatch.WORKS]: {
    name: "Наши работы",
    patch: "/works",
    fullPatch: "/works",
  },
  [enumPatch.REVIEWS]: {
    name: "Отзывы",
    patch: "/reviews",
    fullPatch: "/reviews",
  },
  [enumPatch.STOCKS]: {
    name: "Акции",
    patch: "/stocks",
    fullPatch: "/stocks",
  },
  [enumPatch.CONTACTS]: {
    name: "Контакты",
    patch: "/contacts",
    fullPatch: "/contacts",
  },
};
