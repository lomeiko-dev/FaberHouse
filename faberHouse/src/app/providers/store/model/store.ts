import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IStore } from "./types";
import { projectApiMiddleware, projectApiReducer } from "entities/project-house";
import { projectOfferApiMiddleware, projectOfferApiReducer, projectOfferReducer } from "features/project-form";
import { sortReducer } from "features/project-sort";
import { filterReducer } from "features/house-filter";

const rootReducer: ReducersMapObject<IStore> = {
  ProjectApi: projectApiReducer,
  ProjectOfferApi: projectOfferApiReducer,
  ProjectOfferReducer: projectOfferReducer,
  FilterReducer: filterReducer,
  SortReducer: sortReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectApiMiddleware, projectOfferApiMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
