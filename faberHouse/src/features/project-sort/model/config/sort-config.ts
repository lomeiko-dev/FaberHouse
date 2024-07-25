import { ISortItem } from "../types";
import tree from "shared/assets/img/tree.webp";
import timber from "shared/assets/img/timber.webp";
import skeleton from "shared/assets/img/skeleton.webp";
import bathhouse from "shared/assets/img/bathhouse.webp";

export const classesConfig: ISortItem[] = [
  {
    title: "Дома из бруса",
    option: "technology_like=Брус",
    illustration: tree,
    price: 450000,
  },
  {
    title: "Дома из бревна",
    option: "technology_like=Бревно",
    illustration: timber,
    price: 950000,
  },
  {
    title: "Каркасные дома",
    option: "technology_like=Каркас",
    illustration: skeleton,
    price: 1450000,
  },
  {
    title: "Бани из дерева",
    option: "typeHouse_like=bathhouse",
    illustration: bathhouse,
    price: 271000,
  },
];

export const sortConfig: ISortItem[] = [
  {
    title: "по умолчанию",
    option: "",
  },
  {
    title: "сначала популярное",
    option: "_sort=popularCount&_order=desc",
  },
  {
    title: "сначала дорогое",
    option: "_sort=price&_order=desc",
  },
  {
    title: "сначала дешевое",
    option: "_sort=price&_order=asc",
  },
];
