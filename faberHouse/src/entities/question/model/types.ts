export interface IQuestion {
  id?: number;
  question: string;
}

export interface IAnswer {
  id?: number;
  questionId: number;
  contents: IContentBlock[];
}

export interface IContentBlock {
  type: "text" | "image";
  content: string;
}
