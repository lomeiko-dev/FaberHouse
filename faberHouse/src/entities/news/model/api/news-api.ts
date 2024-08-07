import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchQuery } from "shared/config/api";
import { INews } from "../types";
import { IPayloadProps, IPayloadData } from "./payload-types";

export const newsApi = createApi({
  reducerPath: "NewsApi",
  baseQuery,
  endpoints: (builder) => ({
    getPageNews: builder.query<IPayloadData, IPayloadProps>({
      query: ({ limit, page }) => `${fetchQuery.NEWS}?_page=${page}&_limit=${limit}`,

      transformResponse: (response: INews[], meta) => {
        const totalCount = meta?.response?.headers.get("x-total-count");
        return { news: response, totalCount: Number(totalCount) };
      },
    }),
    getNewsById: builder.query<INews, number>({
      query: (id) => `${fetchQuery.NEWS}/${id}`,
    }),
  }),
});

export const { useGetNewsByIdQuery, useGetPageNewsQuery, useLazyGetNewsByIdQuery, useLazyGetPageNewsQuery } = newsApi;

export const newsApiReducer = newsApi.reducer;
export const newsApiMiddleware = newsApi.middleware;
