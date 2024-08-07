import { lazy } from "react";

export const NewsDetailPageLazy = lazy(async () => await import("./ui/NewsDetailPage"));
