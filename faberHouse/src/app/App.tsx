import { LayoutApp } from "widgets/layouts/layout-app";
import "./style/index.css";
import { Routing } from "./providers/routing/Routing";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

export const App = () => {
  return (
    <LayoutApp>
      <Routing />
    </LayoutApp>
  );
};
