import { lazy } from "react";

export const QuestionPageLazy = lazy(async () => await import("./ui/QuestionPage"));
