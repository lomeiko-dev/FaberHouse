import { Container } from "shared/ui/container";
import style from "./styles.module.scss";
import HouseIcon from "shared/assets/icons/house.svg?react";
import { ServiceList } from "widgets/services";
import { NavItem } from "./components/nav-item/NavItem";
import { Guarantees } from "widgets/guarantees";
import { About } from "widgets/about";

const ServicesPage = () => {
  return (
    <div className={style.page}>
      <Container>
        <div className={style.header}>
          <HouseIcon className={style.icon} />
          <h2>Услуги</h2>
        </div>
      </Container>
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
      <Container>
        <Guarantees/>
        <About/>
      </Container>
    </div>
  );
};

export default ServicesPage;
