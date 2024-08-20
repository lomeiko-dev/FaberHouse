import { IOptMaterial } from "../types";

export const formConfig: IOptMaterial[] = [
  {
    typeOutput: "radios",
    name: "main_material",
    accessories: [
      {
        forName: "main_material",
        title: "Профилированный брус под усадку 145×145 — 493 000 ₽",
        price: 493000,
      },
      {
        forName: "main_material",
        title: "Профилированный брус под усадку 190×145 — 622 000 ₽",
        price: 622000,
      },
      {
        forName: "main_material",
        title: "Профилированный брус 145×145 — 852 000 ₽",
        price: 852000,
      },
      {
        forName: "main_material",
        title: "Профилированный брус 190×145 — 972 000 ₽",
        price: 972000,
      },
    ],
  },
  {
    typeOutput: "dropdown",
    name: "foundation",
    title: "Выберите фундамент",
    accessories: [
      {
        forName: "foundation",
        title: "ЖБИ-сваи — 151 200 ₽",
        price: 151200,
      },
      {
        forName: "foundation",
        title: "Ленточный — 100 600 ₽",
        price: 100600,
      },
      {
        forName: "foundation",
        title: "Плитный — 203 200 ₽",
        price: 203200,
      },
    ],
  },
  {
    typeOutput: "dropdown",
    name: "roof",
    title: "Выберите кровлю",
    accessories: [
      {
        forName: "roof",
        title: "Металлочерепица — 31 000 ₽",
        price: 31000,
      },
      {
        forName: "roof",
        title: "полувальмовые — 61 600 ₽",
        price: 61000,
      },
      {
        forName: "roof",
        title: "односкатные — 73 200 ₽",
        price: 73200,
      },
    ],
  },
];
