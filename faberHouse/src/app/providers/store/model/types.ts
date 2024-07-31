import { projectApiReducer } from "entities/project-house";
import { reviewApiReducer } from "entities/review";
import { IFilterScheme } from "features/house-filter";
import { projectOfferApiReducer } from "features/project-form";
import { IOfferScheme } from "features/project-form";
import { ISortScheme } from "features/project-sort";

export interface IStore {
  ProjectApi: ReturnType<typeof projectApiReducer>;
  ProjectOfferReducer: IOfferScheme;
  SortReducer: ISortScheme;
  FilterReducer: IFilterScheme;
  ProjectOfferApi: ReturnType<typeof projectOfferApiReducer>;
  ReviewApi: ReturnType<typeof reviewApiReducer>;
}
