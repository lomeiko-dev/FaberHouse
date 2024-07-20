import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchQuery } from "shared/config/api";
import { IOffer } from "../types";

export const PorjectOfferApi = createApi({
  reducerPath: "ProjectOfferApi",
  baseQuery,
  endpoints: (builder) => ({
    addOffer: builder.mutation<IOffer, IOffer>({
      query: (body) => ({
        url: `${fetchQuery.OFFERS}`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddOfferMutation } = PorjectOfferApi;

export const projectOfferApiReducer = PorjectOfferApi.reducer;
export const projectOfferApiMiddleware = PorjectOfferApi.middleware;
