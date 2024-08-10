import { StockList } from "./components/StockList/StockList";
import style from "./styles.module.scss";
import { Page } from "../../components/page";

const StocksPage = () => {
  return (
    <Page isDefaultComponents name="Акции">
      <StockList className={style.stocks}/>
    </Page>
  );
};

export default StocksPage;
