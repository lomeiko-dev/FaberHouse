import { Container } from "shared/ui/container";
import style from "./styles.module.scss";
import { ProjectListCommon } from "widgets/project-list";
import HouseIcon from "shared/assets/icons/house.svg?react";
import { Guarantees } from "widgets/guarantees";
import { About } from "widgets/about";
import { ClassesProjectItems, SortDrawer } from "features/project-sort";

const ProjectsPage = () => {
  return (
    <div className={style.page}>
      <Container>
        <div className={style.header}>
          <HouseIcon className={style.icon} />
          <h1>Наши проекты домов, бань и коттеджей из дерева</h1>
        </div>
      </Container>
      <ClassesProjectItems />
      <Container>
        <SortDrawer />
        <ProjectListCommon className={style.list} />
        <Guarantees />
        <About />
      </Container>
    </div>
  );
};

export default ProjectsPage;
