import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchQuery } from "shared/config/api";
import { IStock } from "../types";

export const StockApi = createApi({
  reducerPath: "StockApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllStocks: builder.query<IStock[], void>({
      query: () => `${fetchQuery.STOCK}`,
    }),
    getStockById: builder.query<IStock, number>({
      query: (id) => `${fetchQuery.STOCK}/${id}`,
    }),
  }),
});

export const { useGetAllStocksQuery, useLazyGetAllStocksQuery, useGetStockByIdQuery, useLazyGetStockByIdQuery } =
  StockApi;

export const stockApiReducer = StockApi.reducer;
export const stockApiMiddleware = StockApi.middleware;
