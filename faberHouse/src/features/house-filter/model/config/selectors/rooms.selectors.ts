import { ISelector } from "../../types";

export const roomsSelectors: ISelector[] = [
  {
    title: "1",
    option: "roomCount_like=1",
  },
  {
    title: "2",
    option: "roomCount_like=2",
  },
  {
    title: "3",
    option: "roomCount_like=3",
  },
  {
    title: "4",
    option: "roomCount_like=4",
  },
  {
    title: "5+",
    option: "roomCount_gte=5",
  },
];
