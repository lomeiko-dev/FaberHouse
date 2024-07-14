import { lazy } from "react";

export const WorksPageLazy = lazy(async () => await import("./ui/WorksPage"));
