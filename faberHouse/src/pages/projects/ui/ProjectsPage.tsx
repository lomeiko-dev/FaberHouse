import { Container } from "shared/ui/container";
import style from "./styles.module.scss";
import { ProjectListCommon } from "widgets/project-list";
import HouseIcon from "shared/assets/icons/house.svg?react";
import { Guarantees } from "widgets/guarantees";
import { About } from "widgets/about";
import { ClassesProjectItems, SortDrawer, sortSelection } from "features/project-sort";
import { useAppSelector } from "shared/lib/hooks/useAppSelector";

const ProjectsPage = () => {
  const store = useAppSelector(sortSelection);

  return (
    <div className={style.page}>
      <Container className={style.header_wrap}>
        <div className={style.header}>
          <HouseIcon className={style.icon} />
          <h1>Наши проекты домов, бань и коттеджей из дерева</h1>
        </div>
      </Container>
      <ClassesProjectItems defaultSelectIndex={store.selectIndexClass+1}/>
      <Container className={style.content}>
        <SortDrawer className={style.sort} />
        <ProjectListCommon className={style.list} params={store.queryString} />
        <Guarantees />
        <About />
      </Container>
    </div>
  );
};

export default ProjectsPage;
