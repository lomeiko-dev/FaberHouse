import { Container } from "shared/ui/container";
import style from "./styles.module.scss";
import { ServiceList } from "widgets/services";
import { NavItem } from "./components/nav-item/NavItem";
import { Page } from "../../components/page";

const ServicesPage = () => {
  return (
    <Page isDefaultComponents name="Услуги">
      <div className={style.service_wrap}>
        <Container>
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
        </Container>
      </div>
    </Page>
  );
};

export default ServicesPage;
