import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchQuery } from "shared/config/api";
import { IContact } from "../types";

export const contactApi = createApi({
  reducerPath: "ContactApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllContacts: builder.query<IContact[], void>({
      query: () => `${fetchQuery.CONTACT}`,
    }),
  }),
});

export const { useGetAllContactsQuery, useLazyGetAllContactsQuery } = contactApi;

export const contactApiReducer = contactApi.reducer;
export const contactApiMiddleware = contactApi.middleware;
