import { LayoutApp } from "widgets/layouts/layout-app";
import "./style/index.css";
import { Routing } from "./providers/routing/Routing";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { AnotatedModel } from "shared/components/anotated-model/ui/AnotatedModel";

export const App = () => {
  return (
    <LayoutApp>
      {/* <Routing /> */}
      <AnotatedModel
        showAnotated
        model={{
          anotateds: [
            { coord: { x: 175, y: 200 }, title: "Внутренние перегородки", description: "Тестовое описание" },
            { coord: { x: 325, y: 220 }, title: "Внутренние перегородки", description: "Тестовое описание" },
            { coord: { x: 57, y: 470 }, title: "Кровля", description: "Минеральная вата «KNAUF» / (100мм/150мм/200 мм)" },
          ],
          modelImage: "https://i0.wp.com/illustrators.ru/uploads/illustration/image/1141672/Jrw93dEG5Z8.jpg?ssl=1",
          title: "Полы первого этажа",
        }}
      />
    </LayoutApp>
  );
};
