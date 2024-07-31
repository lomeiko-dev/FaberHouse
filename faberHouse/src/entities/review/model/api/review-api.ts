import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchQuery } from "shared/config/api";
import { IPayloadData, IPayloadProps } from "./payload-types";
import { IReview } from "../types";

export const ReviewApi = createApi({
  reducerPath: "ReviewApi",
  baseQuery,
  endpoints: (builder) => ({
    getPageReviews: builder.query<IPayloadData, IPayloadProps>({
      query: ({ page, limit }) => `${fetchQuery.REVIEW}?_page=${page}&_limit=${limit}`,

      transformResponse: (response: IReview[], meta) => {
        const totalCount = meta?.response?.headers.get("x-total-count");
        return { reviews: response, totalCount: Number(totalCount) };
      },
    }),
  }),
});

export const { useGetPageReviewsQuery, useLazyGetPageReviewsQuery } = ReviewApi;

export const reviewApiReducer = ReviewApi.reducer;
export const reviewApiMiddleware = ReviewApi.middleware;
