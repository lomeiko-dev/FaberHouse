import { Container } from "shared/ui/container";
import style from "./styles.module.scss";
import { ProjectListCommon } from "widgets/project-list";
import HouseIcon from "shared/assets/icons/house.svg?react";
import { Guarantees } from "widgets/guarantees";
import { About } from "widgets/about";

const ProjectsPage = () => {
  return (
    <div className={style.page}>
      <Container>
        <div className={style.header}>
          <HouseIcon className={style.icon}/>
          <h1>Наши проекты домов, бань и коттеджей из дерева</h1>
        </div>
        <ProjectListCommon className={style.list} count={18} />
        <Guarantees/>
        <About/>
      </Container>
    </div>
  );
};

export default ProjectsPage;
