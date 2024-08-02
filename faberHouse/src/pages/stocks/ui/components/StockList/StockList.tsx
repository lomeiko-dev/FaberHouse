import { Skeleton, StockItem, useGetAllStocksQuery } from "entities/stock";
import style from "./styles.module.scss";
import { Container } from "shared/ui/container";
import classNames from "classnames";
import { Error } from "shared/ui/error";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/route-path";

interface IProps {
  className?: string;
}

export const StockList: React.FC<IProps> = (props) => {
  const { className } = props;

  const { data, isLoading, isError } = useGetAllStocksQuery();
  const navigate = useNavigate()

  const clickStockHandler = (id: number) => {
    navigate(`${RoutePath.STOCK_DETAIL.path}/${id}`)
  }

  if (isLoading) {
    return (
      <Container>
        <div className={style.list}>
          {Array(5)
            .fill("")
            .map(() => (
              <Skeleton />
            ))}
        </div>
      </Container>
    );
  }

  if(isError){
    return(
        <div className={style.list_wrap}>
            <Error message="Ошибка сервера."/>
        </div>
    )
  }

  return (
    <div className={classNames(style.list_wrap, className)}>
      <Container>
        <div className={style.list}>
          {data?.map((stock) => (
            <StockItem onClick={() => clickStockHandler(stock.id || 0)} {...stock} />
          ))}
        </div>
      </Container>
    </div>
  );
};
