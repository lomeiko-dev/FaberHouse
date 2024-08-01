import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchQuery } from "shared/config/api";
import { IReview } from "entities/review";

export const AddReviewApi = createApi({
  reducerPath: "AddReviewApi",
  baseQuery,
  endpoints: (builder) => ({
    addReview: builder.mutation<IReview, IReview>({
      query: (body) => ({
        url: `${fetchQuery.REVIEW}`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddReviewMutation } = AddReviewApi;

export const addReviewApiReducer = AddReviewApi.reducer;
export const addReviewApiMiddleware = AddReviewApi.middleware;
