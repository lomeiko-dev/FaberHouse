import style from "./styles.module.scss";
import { ClassesProject } from "features/project-sort";
import { Intro } from "./components/intro/Intro";
import { Guarantees } from "widgets/guarantees";
import { Container } from "shared/ui/container";
import { About } from "widgets/about";
import { IProject, ProjectCard, ProjectItem } from "entities/project";

const project1: IProject = {
  title: 'Дом из профилированного бруса 6.0м×9.0м ЛД-48',
  series: 'Полутороэтажный',
  technology: 'Брус',
  size: '6.0 x 9.0',
  additionally: 'Терраса',
  roomCount: 5,
  square: 96,
  price: 2950000,
  additionallyDescription: '',
  constructionTechnology: '',
  foundation: '',
  roomHeight: '',
  files: [],
  videos: [],
  images: [
    "https://mykaleidoscope.ru/uploads/posts/2020-03/1584194725_9-p-krasivii-dizain-nebolshikh-zagorodnikh-dom-26.jpg",
    "https://bigfoto.name/uploads/posts/2021-12/1639848743_1-bigfoto-name-p-vse-vidi-domov-1.jpg",
    "https://idei.club/raznoe/uploads/posts/2023-06/1685583980_idei-club-p-krasivie-zagorodnie-doma-i-kottedzhi-vkont-5.jpg"
  ],
};

const HomePage = () => {
  return (
    <div className={style.page}>
      <Intro />
      <ClassesProject />
      <Container>
        <Guarantees />
        {/* <ProjectItem project={project1} cardPosition="right"/> */}
        <ProjectCard project={project1}/>
        <About />
      </Container>
    </div>
  );
};

export default HomePage;
