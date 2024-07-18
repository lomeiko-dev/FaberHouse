import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IStore } from "./types";

const rootReducer: ReducersMapObject<IStore> = {};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
