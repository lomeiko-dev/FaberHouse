import { LayoutApp } from "widgets/layouts/layout-app";
import "./style/index.css";
import { Routing } from "./providers/routing/Routing";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Dropdown } from "shared/ui/dropdown";
import { classesConfig } from "features/project-sort/model/config/sort-config";
import { useState } from "react";

export const App = () => {
  const [valus, setValue] = useState(classesConfig[1]);

  return (
    <LayoutApp>
      {/* <Routing /> */}
      <div>
        <Dropdown optionLabel="title" value={valus} onChange={(e) => setValue(e.value)} options={classesConfig} />
      </div>
    </LayoutApp>
  );
};
