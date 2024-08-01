import { StockItem, useGetAllStocksQuery } from "entities/stock";
import style from "./styles.module.scss";
import { Container } from "shared/ui/container";
import classNames from "classnames";

interface IProps {
  className?: string;
}

export const StockList: React.FC<IProps> = (props) => {
  const { className } = props;

  const { data, isLoading, isError } = useGetAllStocksQuery();

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
