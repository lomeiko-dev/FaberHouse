import { lazy } from "react";

export const ContactsPageLazy = lazy(async () => await import("./ui/ContactsPage"));
