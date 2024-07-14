import { lazy } from "react";

export const ServicesPageLazy = lazy(async () => await import("./ui/ServicesPage"));
