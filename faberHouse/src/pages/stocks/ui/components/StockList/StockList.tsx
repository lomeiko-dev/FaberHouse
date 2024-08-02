import { Skeleton, StockItem, useGetAllStocksQuery } from "entities/stock";
import style from "./styles.module.scss";
import { Container } from "shared/ui/container";
import classNames from "classnames";
import { Error } from "shared/ui/error";

interface IProps {
  className?: string;
}

export const StockList: React.FC<IProps> = (props) => {
  const { className } = props;

  const { data, isLoading, isError } = useGetAllStocksQuery();

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
            <StockItem onClick={() => null} {...stock} />
          ))}
        </div>
      </Container>
    </div>
  );
};
