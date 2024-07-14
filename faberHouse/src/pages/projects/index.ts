import { lazy } from "react";

export const ProjectsPageLazy = lazy(async () => await import("./ui/ProjectsPage"));
