import { Container } from "shared/ui/container";
import style from "./styles.module.scss";
import HouseIcon from "shared/assets/icons/house.svg?react";
import { AboutCompany } from "./components/about/AboutCompany";
import { Navigation } from "./components/navigation/Navigation";
import { Guarantees } from "widgets/guarantees";
import { About } from "widgets/about";

const AboutPage = () => {
  return (
    <div className={style.page}>
      <Container>
        <div className={style.header}>
          <HouseIcon className={style.icon} />
          <h2>О компании</h2>
        </div>
      </Container>
      <div className={style.about_wrap}>
        <Container>
          <AboutCompany />
          <Navigation className={style.nav} />
        </Container>
      </div>
      <Container>
        <Guarantees />
        <About />
      </Container>
    </div>
  );
};

export default AboutPage;
