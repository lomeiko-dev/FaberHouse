import { useParams } from "react-router-dom";
import style from "./styles.module.scss";
import HouseIcon from "shared/assets/icons/house.svg?react";
import { useGetStockByIdQuery } from "entities/stock";
import { StockPreview } from "./components/preview/StockPreview";
import { Container } from "shared/ui/container";
import { Guarantees } from "widgets/guarantees";
import { About } from "widgets/about";

const StockDetailPage = () => {
  const { id = "" } = useParams();
  const { data } = useGetStockByIdQuery(Number(id));

  return (
    <div className={style.page}>
      <Container>
        <div className={style.header}>
          <HouseIcon className={style.icon} />
          <h2>{data?.title}</h2>
        </div>
      </Container>
      <div className={style.preview}>
        {data && <StockPreview {...data} />}
      </div>
      <Container>
        <Guarantees/>
        <About/>
      </Container>
    </div>
  );
};

export default StockDetailPage;
