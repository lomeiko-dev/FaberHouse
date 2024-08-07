import { lazy } from "react";

export const NewsPageLazy = lazy(async () => await import("./ui/NewsPage"));
