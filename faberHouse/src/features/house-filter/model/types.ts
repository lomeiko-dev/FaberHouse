import { DropdownProps } from "primereact/dropdown";

export interface IFilterScheme {
  filterString: string;
  searchString: string;
  fullFilterString: string;
}

export interface IFilterConfig extends DropdownProps {
  typeUI: "dropdown" | "multiSelect";
  nameKey: string;
}

export interface ISelector {
  title: string;
  option: string;
}
