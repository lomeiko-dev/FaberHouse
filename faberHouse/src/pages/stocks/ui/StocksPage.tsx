import { Guarantees } from "widgets/guarantees";
import { StockList } from "./components/StockList/StockList";
import style from "./styles.module.scss";
import HouseIcon from "shared/assets/icons/house.svg?react";
import { About } from "widgets/about";
import { Container } from "shared/ui/container";

const StocksPage = () => {
  return (
    <div className={style.page}>
      <Container>
        <div className={style.header}>
          <HouseIcon className={style.icon} />
          <h2>Акции</h2>
        </div>
      </Container>
      <StockList className={style.stocks}/>
      <Container>
        <Guarantees />
        <About />
      </Container>
    </div>
  );
};

export default StocksPage;
