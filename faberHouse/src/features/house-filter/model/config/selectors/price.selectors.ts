import { ISelector } from "../../types";

export const priceSelectors: ISelector[] = [
  {
    title: "до 1.000.000 ₽",
    option: "price_lte=1000000",
  },
  {
    title: "до 2.000.000 ₽",
    option: "price_lte=2000000",
  },
  {
    title: "до 3.000.000 ₽",
    option: "price_lte=3000000",
  },
  {
    title: "до 4.000.000 ₽",
    option: "price_lte=4000000",
  },
  {
    title: "до 5.000.000 ₽",
    option: "price_lte=5000000",
  },
  {
    title: "от 10.000.000 ₽",
    option: "price_gte=10000000",
  },
];
