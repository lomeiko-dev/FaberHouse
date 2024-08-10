import { useParams } from "react-router-dom";
import style from "./styles.module.scss";
import { useGetStockByIdQuery } from "entities/stock";
import { StockPreview } from "./components/preview/StockPreview";
import { Page } from "../../components/page";

const StockDetailPage = () => {
  const { id = "" } = useParams();
  const { data } = useGetStockByIdQuery(Number(id));

  return (
    <Page isDefaultComponents name={data?.title || 'Ошибка'}>
      <div className={style.preview}>
        {data && <StockPreview {...data} />}
      </div>
    </Page>
  );
};

export default StockDetailPage;
