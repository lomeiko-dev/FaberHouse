import { INews } from "../types";

export interface IPayloadProps {
  page: number;
  limit: number;
}

export interface IPayloadData {
  news: INews[];
  totalCount: number;
}
