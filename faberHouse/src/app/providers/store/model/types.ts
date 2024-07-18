import { projectApiReducer } from "entities/project";

export interface IStore {
  ProjectApi: ReturnType<typeof projectApiReducer>;
}
