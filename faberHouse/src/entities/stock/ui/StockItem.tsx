import classNames from "classnames";
import { IStock } from "../model/types";
import style from "./styles.module.scss";

interface IProps extends Omit<IStock, "description" | "orderList"> {
  className?: string;
  onClick: () => void;
}

export const StockItem: React.FC<IProps> = (props) => {
  const { descriptionPreview, preview, title, className, onClick } = props;

  return (
    <div className={classNames(style.stock, className)}>
      <img src={preview} alt="preview stock" />
      <div className={style.content}>
        <h3>{title}</h3>
        <h4>{descriptionPreview}</h4>
        <button onClick={onClick}>Подробности</button>
      </div>
    </div>
  );
};
