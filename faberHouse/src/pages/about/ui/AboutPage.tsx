import style from "./styles.module.scss";
import { AboutCompany } from "./components/about/AboutCompany";
import { Navigation } from "./components/navigation/Navigation";
import { Page } from "../../components/page";
import { BlockSection } from "shared/ui/block-section";

const AboutPage = () => {
  return (
    <Page isDefaultComponents name="О компании">
      <BlockSection>
          <AboutCompany />
          <Navigation className={style.nav} />
      </BlockSection>
    </Page>
  );
};

export default AboutPage;
