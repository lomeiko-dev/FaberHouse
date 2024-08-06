import { INews } from "../types";

export interface IPayloadProps {
  page: number;
  limit: number;
}

export interface IPayloadData {
  projects: INews[];
  totalCount: number;
}
