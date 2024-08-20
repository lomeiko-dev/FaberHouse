export type typeOutput = "radios" | "dropdown";

export interface IOptMaterial {
  title?: string;
  accessories: IAccessories[];
  typeOutput: typeOutput;
  name: string;
}

export interface IAccessories {
  forName: string;
  title: string;
  price: number;
}
