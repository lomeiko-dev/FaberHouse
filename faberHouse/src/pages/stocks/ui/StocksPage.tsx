import { StockList } from "./components/StockList/StockList";
import { Page } from "../../components/page";

const StocksPage = () => {
  return (
    <Page isDefaultComponents name="Акции">
      <StockList/>
    </Page>
  );
};

export default StocksPage;
