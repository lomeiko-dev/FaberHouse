import { lazy } from "react";

export const StocksPageLazy = lazy(async () => await import("./ui/StocksPage"));
