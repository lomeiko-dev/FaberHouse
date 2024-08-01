import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { IStore } from "./types";
import { projectApiMiddleware, projectApiReducer } from "entities/project-house";
import { projectOfferApiMiddleware, projectOfferApiReducer, projectOfferReducer } from "features/project-form";
import { sortReducer } from "features/project-sort";
import { filterReducer } from "features/house-filter";
import { reviewApiMiddleware, reviewApiReducer } from "entities/review";
import { addReviewApiMiddleware, addReviewApiReducer, reviewFormReducer } from "features/review-form";
import { stockApiMiddleware, stockApiReducer } from "entities/stock";

const rootReducer: ReducersMapObject<IStore> = {
  ProjectApi: projectApiReducer,
  ProjectOfferApi: projectOfferApiReducer,
  ProjectOfferReducer: projectOfferReducer,
  FilterReducer: filterReducer,
  AddReviewApi: addReviewApiReducer,
  SortReducer: sortReducer,
  ReviewApi: reviewApiReducer,
  ReviewForm: reviewFormReducer,
  StockApi: stockApiReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      projectApiMiddleware,
      projectOfferApiMiddleware,
      reviewApiMiddleware,
      addReviewApiMiddleware,
      stockApiMiddleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
