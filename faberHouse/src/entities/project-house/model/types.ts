export interface IProject {
  id?: number;
  title: string;
  typeHouse: string;
  PopularCount: number;
  series: string;
  technology: string;
  size: string;
  additionally: string;
  roomCount: number;
  square: number;
  price: number;
  images: string[];
  videos: string[];
  files: string[];
  foundation: string;
  roomHeight: string;
  constructionTechnology: string;
  additionallyDescription: string;
  exteriorWalls: string;
  services: number[];
  houseAnotated: IAnotatedModel;
  AllAnotated?: IAnotatedModel[];
  foundationIllustrations: IFoundation[];
}

export interface IFoundation {
  image: string;
  title: string;
}

export interface IAnotatedModel {
  modelImage: string;
  title?: string;
  anotateds: IAnotated[];
}

export interface IAnotated {
  coord: IPoint;
  title?: string;
  description?: string;
}

export interface IPoint {
  x: number;
  y: number;
}

export enum enumInfoNavigate {
  COMPLECTATION = "COMPLECTATION",
  TECHNOLOGY = "TECHNOLOGY",
  SERVICES = "SERVICES",
  FOUNDATION = "FOUNDATION",
  MEDIA = "MEDIA",
  COOPERATION = "COOPERATION",
}

export interface ICooperation {
  title: string;
  list?: string[];
  description?: string;
}

export const infoNavigation: Record<enumInfoNavigate, string> = {
  [enumInfoNavigate.COMPLECTATION]: "Комплектация",
  [enumInfoNavigate.TECHNOLOGY]: "Технология",
  [enumInfoNavigate.SERVICES]: "Доп. услуги",
  [enumInfoNavigate.FOUNDATION]: "Фундамент",
  [enumInfoNavigate.MEDIA]: "Фото и видео",
  [enumInfoNavigate.COOPERATION]: "Этапы сотрудничества",
};
