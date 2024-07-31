import { IReview } from "../types";

export interface IPayloadProps {
  page: number;
  limit: number;
}

export interface IPayloadData {
  projects: IReview[];
  totalCount: number;
}
