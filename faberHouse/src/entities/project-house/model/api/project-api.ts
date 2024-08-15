import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchQuery } from "shared/config/api";
import { IPayloadData, IPayloadProps } from "./payload-types";
import { IProject } from "../types";

export const projectApi = createApi({
  reducerPath: "ProjectApi",
  baseQuery,
  endpoints: (builder) => ({
    getPageProjects: builder.query<IPayloadData, IPayloadProps>({
      query: ({ page, limit, params }) => `${fetchQuery.PROJECT}?_page=${page}&_limit=${limit}${params}`,

      transformResponse: (response: IProject[], meta) => {
        const totalCount = meta?.response?.headers.get("x-total-count");
        return { projects: response, totalCount: Number(totalCount) };
      },
    }),
    getProjectById: builder.query<IProject, number>({
      query: (id) => `${fetchQuery.PROJECT}/${id}`,
    }),
  }),
});

export const {
  useGetPageProjectsQuery,
  useLazyGetPageProjectsQuery,
  useGetProjectByIdQuery,
  useLazyGetProjectByIdQuery,
} = projectApi;

export const projectApiReducer = projectApi.reducer;
export const projectApiMiddleware = projectApi.middleware;
