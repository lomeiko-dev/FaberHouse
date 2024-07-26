import { seriesSelectors } from "./selectors/series.selectors";
import { IFilterConfig } from "../types";
import { sizeSelectors } from "./selectors/size.selectors";
import { roomsSelectors } from "./selectors/rooms.selectors";
import { priceSelectors } from "./selectors/price.selectors";
import { additionallySelectors } from "./selectors/additionally.selectors";

export const filterFormConfig: IFilterConfig[] = [
  {
    typeUI: "multiSelect",
    nameKey: "qwe",
    placeholder: "Серия",
    options: seriesSelectors,
    optionLabel: "title",
    optionValue: "option",
  },
  {
    typeUI: "multiSelect",
    nameKey: "qwer",
    placeholder: "Размер",
    options: sizeSelectors,
    optionLabel: "title",
    optionValue: "option",
  },
  {
    typeUI: "multiSelect",
    nameKey: "qwert",
    placeholder: "Комнат",
    options: roomsSelectors,
    optionLabel: "title",
    optionValue: "option",
  },
  {
    typeUI: "dropdown",
    nameKey: "qwerty",
    placeholder: "Цена",
    options: priceSelectors,
    optionLabel: "title",
    optionValue: "option",
  },
  {
    typeUI: "dropdown",
    nameKey: "qwertyu",
    placeholder: "Дополнительно",
    options: additionallySelectors,
    optionLabel: "title",
    optionValue: "option",
  },
];
