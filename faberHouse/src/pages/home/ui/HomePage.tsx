import style from "./styles.module.scss";
import { ClassesProject } from "features/project-sort";
import { Intro } from "./components/intro/Intro";
import { Guarantees } from "widgets/guarantees";
import { Container } from "shared/ui/container";
import { About } from "widgets/about";
import { ProjectListPreview } from "widgets/project-list";
import { ReviewList } from "widgets/reviews";

const HomePage = () => {
  return (
    <div className={style.page}>
      <Intro />
      <ClassesProject />
      <Container>
        <ProjectListPreview className={style.projects} title="Зарекомендовашие себя проекты" count={5}/>
        <Guarantees />
        <ReviewList limit={3}/>
        <About className={style.about}/>
      </Container>
    </div>
  );
};

export default HomePage;
