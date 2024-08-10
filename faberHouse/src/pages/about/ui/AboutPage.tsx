import { Container } from "shared/ui/container";
import style from "./styles.module.scss";
import { AboutCompany } from "./components/about/AboutCompany";
import { Navigation } from "./components/navigation/Navigation";
import { Page } from "../../components/page";

const AboutPage = () => {
  return (
    <Page isDefaultComponents name="О компании">
      <div className={style.about_wrap}>
        <Container>
          <AboutCompany />
          <Navigation className={style.nav} />
        </Container>
      </div>
    </Page>
  );
};

export default AboutPage;
