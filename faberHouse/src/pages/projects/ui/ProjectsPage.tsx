import { Container } from "shared/ui/container";
import style from "./styles.module.scss";
import { ProjectListCommon } from "widgets/project-list";
import { SortDrawer, sortSelection } from "features/project-sort";
import { useAppSelector } from "shared/lib/hooks/useAppSelector";
import { filterSelector } from "features/house-filter";
import { SortFilterCompact } from "./components/SortFilterCompact";
import { useState } from "react";
import FilterIcon from "shared/assets/icons/filter.svg?react";
import { useWindowSize } from "@reactuses/core";
import { Sidebar } from "primereact/sidebar";
import { Page } from "../../components/page";
import { BlockTest } from "shared/components/block-test";

const ProjectsPage = () => {
  const storeSort = useAppSelector(sortSelection);
  const storeFilter = useAppSelector(filterSelector);

  const [visible, setVisible] = useState(false);
  const { width } = useWindowSize();

  return (
    <Page headerChildren={width > 768 && <BlockTest />} isDefaultComponents name="Наши проекты домов, бань и коттеджей из дерева">
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
      </Container>
      <Sidebar
        title="Фильтрация и сортировка"
        position="top"
        fullScreen
        onHide={() => setVisible(false)}
        visible={visible}
        modal
      >
        <SortFilterCompact onCloseModal={() => setVisible(false)} isMobile />
      </Sidebar>
    </Page>
  );
};

export default ProjectsPage;
