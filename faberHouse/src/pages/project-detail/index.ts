import { lazy } from "react";

export const ProjectDetailPageLazy = lazy(async () => await import("./ui/ProjectDetailPage"));
