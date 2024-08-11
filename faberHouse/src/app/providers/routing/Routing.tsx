import { Suspense } from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";
import { Routes } from "./lib/Routes";
import { Laoder } from "shared/ui/loader";
import { Container } from "shared/ui/container";

export const Routing = () => {
  return (
    <Suspense fallback={<Container><Laoder isCenter /></Container>}>
      <ReactRoutes>
        {Routes.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </ReactRoutes>
    </Suspense>
  );
};
