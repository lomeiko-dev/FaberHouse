import { lazy } from "react";

export const StockDetailPageLazy = lazy(async () => await import("./ui/StockDetailPage"));
    