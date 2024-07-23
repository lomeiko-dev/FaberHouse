import { ISortItem } from "../types";
import tree from "shared/assets/img/tree.webp";
import timber from "shared/assets/img/timber.webp";
import skeleton from "shared/assets/img/skeleton.webp";
import bathhouse from "shared/assets/img/bathhouse.webp";

export const classesConfig: ISortItem[] = [
  {
    title: "Дома из бруса",
    value: "",
    illustration: tree,
    price: 450000,
  },
  {
    title: "Дома из бревна",
    value: "",
    illustration: timber,
    price: 950000,
  },
  {
    title: "Каркасные дома",
    value: "",
    illustration: skeleton,
    price: 1450000,
  },
  {
    title: "Бани из дерева",
    value: "",
    illustration: bathhouse,
    price: 271000,
  },
];

export const sortConfig: ISortItem[] = [
  {
    title: "по умолчанию",
    value: "",
  },
  {
    title: "сначала популярное",
    value: "",
  },
  {
    title: "сначала дорогое",
    value: "",
  },
  {
    title: "сначала дешевое",
    value: "",
  },
];
