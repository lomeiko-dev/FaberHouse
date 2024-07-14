import { Suspense } from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { Routes } from "./lib/Routes";
import { Laoder } from "shared/ui/loader";

export const Routing = () => {
  return (
    <Suspense fallback={<Laoder isCenter />}>
      <ReactRoutes>
        {Routes.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </ReactRoutes>
    </Suspense>
  );
};
