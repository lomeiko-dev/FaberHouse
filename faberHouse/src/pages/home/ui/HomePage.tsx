import style from "./styles.module.scss";
import { ClassesProject } from "features/project-sort";
import { Intro } from "./components/intro/Intro";
import { Guarantees } from "widgets/guarantees";
import { Container } from "shared/ui/container";
import { About } from "widgets/about";

const HomePage = () => {
  return (
    <div className={style.page}>
      <Intro />
      <ClassesProject />
      <Container>
        <Guarantees />
        <About />
      </Container>
    </div>
  );
};

export default HomePage;
