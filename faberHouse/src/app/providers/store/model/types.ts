import { projectApiReducer } from "entities/project-house";
import { projectOfferApiReducer } from "features/project-form";
import { IOfferScheme } from "features/project-form";
import { ISortScheme } from "features/project-sort";

export interface IStore {
  ProjectApi: ReturnType<typeof projectApiReducer>;
  ProjectOfferReducer: IOfferScheme;
  SortReducer: ISortScheme;
  ProjectOfferApi: ReturnType<typeof projectOfferApiReducer>;
}
