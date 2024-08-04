import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchQuery } from "shared/config/api";
import { IService } from "../types";

export const serviceApi = createApi({
  reducerPath: "ServiceApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllServices: builder.query<IService[], void>({
      query: () => `${fetchQuery.SERVICE}`,
    }),
  }),
});

export const { useGetAllServicesQuery, useLazyGetAllServicesQuery } = serviceApi;

export const serviceApiReducer = serviceApi.reducer;
export const serviceApiMiddleware = serviceApi.middleware;
