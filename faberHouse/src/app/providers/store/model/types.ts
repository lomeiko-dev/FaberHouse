import { projectApiReducer } from "entities/project";
import { projectOfferApiReducer } from "features/project-form";
import { IOfferScheme } from "features/project-form";

export interface IStore {
  ProjectApi: ReturnType<typeof projectApiReducer>;
  ProjectOfferReducer: IOfferScheme;
  ProjectOfferApi: ReturnType<typeof projectOfferApiReducer>;
}
