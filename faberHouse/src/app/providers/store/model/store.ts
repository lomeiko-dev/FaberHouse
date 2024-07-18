import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IStore } from "./types";
import { projectApiMiddleware, projectApiReducer } from "entities/project";

const rootReducer: ReducersMapObject<IStore> = {
  ProjectApi: projectApiReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectApiMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
