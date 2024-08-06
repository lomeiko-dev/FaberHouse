export enum enumNewsBody {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  IMAGES = "IMAGES",
  LIST = "LIST",
}

export interface INews {
  id?: number;
  title: string;
  description: string;
  body: INewsBody[];
}

export interface INewsBody {
  type: enumNewsBody;
  title?: string;
  subtitle?: string;
  content: any;
  signature?: string;
}
