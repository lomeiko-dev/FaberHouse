import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, fetchQuery } from "shared/config/api";
import { IQuestion, IAnswer } from "../types";

export const questionApi = createApi({
  reducerPath: "QuestionApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllQuestion: builder.query<IQuestion[], void>({
      query: () => `${fetchQuery.QUESTION}`,
    }),
    getAnswerByQuestionId: builder.query<IAnswer, number>({
      query: (id) => `${fetchQuery.ANSWER}/${id}`,
    }),
  }),
});

export const {
  useGetAllQuestionQuery,
  useGetAnswerByQuestionIdQuery,
  useLazyGetAllQuestionQuery,
  useLazyGetAnswerByQuestionIdQuery,
} = questionApi;

export const questionApiReducer = questionApi.reducer;
export const questionApiMiddleware = questionApi.middleware;
