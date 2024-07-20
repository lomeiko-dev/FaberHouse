import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IStore } from "./types";
import { projectApiMiddleware, projectApiReducer } from "entities/project";
import { projectOfferApiMiddleware, projectOfferApiReducer, projectOfferReducer } from "features/project-form";

const rootReducer: ReducersMapObject<IStore> = {
  ProjectApi: projectApiReducer,
  ProjectOfferApi: projectOfferApiReducer,
  ProjectOfferReducer: projectOfferReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectApiMiddleware, projectOfferApiMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
