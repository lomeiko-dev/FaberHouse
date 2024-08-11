import { useParams } from "react-router-dom";
import { useGetStockByIdQuery } from "entities/stock";
import { StockPreview } from "./components/preview/StockPreview";
import { Page } from "../../components/page";

const StockDetailPage = () => {
  const { id = "" } = useParams();
  const { data } = useGetStockByIdQuery(Number(id));

  return (
    <Page isDefaultComponents name={data?.title || "Ошибка"}>
      {data && <StockPreview {...data} />}
    </Page>
  );
};

export default StockDetailPage;
