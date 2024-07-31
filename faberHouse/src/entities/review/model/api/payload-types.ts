import { IReview } from "../types";

export interface IPayloadProps {
  page: number;
  limit: number;
}

export interface IPayloadData {
  reviews: IReview[];
  totalCount: number;
}
