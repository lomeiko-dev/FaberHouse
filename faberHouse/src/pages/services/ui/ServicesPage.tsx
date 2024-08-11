import style from "./styles.module.scss";
import { ServiceList } from "widgets/services";
import { NavItem } from "./components/nav-item/NavItem";
import { Page } from "../../components/page";
import { BlockSection } from "shared/ui/block-section";

const ServicesPage = () => {
  return (
    <Page isDefaultComponents name="Услуги">
      <BlockSection>
          <p className={style.description}>
            Компания Legno Domus занимается строительством уютных и прочных деревянных домов. Но, кроме того, мы берем
            на себя выполнение и других услуг, включая меблировку зданий и устройство коммуникаций.
          </p>
          <h3 className={style.title}>Вы можете заказать у нас:</h3>
          <ServiceList className={style.list} />
          <h4 className={style.subtitle}>
            Обратившись в Legno Domus, можно получить полный спектр качественных услуг, которые обеспечивают комфортное
            проживание в доме.
          </h4>
          <nav>
            <NavItem link="" title="Индивидуальное проектирование"/>
            <NavItem link="" title="Строительство в кредит"/>
            <NavItem link="" title="Инженерные коммуникации"/>
          </nav>
      </BlockSection>
    </Page>
  );
};

export default ServicesPage;
