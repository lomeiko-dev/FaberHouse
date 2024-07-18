import { IProject } from "../types";

export interface IPayloadProps {
  page: number;
  limit: number;
  params?: string;
}

export interface IPayloadData {
  projects: IProject[];
  totalCount: number;
}
