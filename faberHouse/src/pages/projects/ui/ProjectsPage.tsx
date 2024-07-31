import { Container } from "shared/ui/container";
import style from "./styles.module.scss";
import { ProjectListCommon } from "widgets/project-list";
import HouseIcon from "shared/assets/icons/house.svg?react";
import { Guarantees } from "widgets/guarantees";
import { About } from "widgets/about";
import { SortDrawer, sortSelection } from "features/project-sort";
import { useAppSelector } from "shared/lib/hooks/useAppSelector";
import { filterSelector } from "features/house-filter";
import { SortFilterCompact } from "./components/SortFilterCompact";
import { useState } from "react";
import FilterIcon from "shared/assets/icons/filter.svg?react";
import { useWindowSize } from "@reactuses/core";
import { Sidebar } from "primereact/sidebar";

const ProjectsPage = () => {
  const storeSort = useAppSelector(sortSelection);
  const storeFilter = useAppSelector(filterSelector);

  const [visible, setVisible] = useState(false);
  const { width } = useWindowSize();

  return (
    <div className={style.page}>
      <Container className={style.header_wrap}>
        <div className={style.header}>
          <HouseIcon className={style.icon} />
          <h1>Наши проекты домов, бань и коттеджей из дерева</h1>
        </div>
      </Container>

      {width < 480 ? (
        <button onClick={() => setVisible(true)} className={style.button_filter}>
          <FilterIcon />
          <p>Фильтр проектов</p>
        </button>
      ) : (
        <SortFilterCompact />
      )}

      <Container className={style.content}>
        <SortDrawer className={style.sort} />
        <ProjectListCommon className={style.list} params={`${storeSort.queryString}&${storeFilter.fullFilterString}`} />
        <Guarantees />
        <About />
      </Container>
      <Sidebar title="Фильтрация и сортировка" position="top" fullScreen onHide={() => setVisible(false)} visible={visible} modal>
        <SortFilterCompact onCloseModal={() => setVisible(false)} isMobile/>
      </Sidebar>
    </div>
  );
};

export default ProjectsPage;
