import classNames from "classnames";
import { IStock } from "../model/types";
import style from "./styles.module.scss";
import { Button, enumStyleButton } from "shared/ui/button";

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
        <Button className={style.btn} stylePattern={enumStyleButton.BORDER} onClick={onClick}>
          Подробности
        </Button>
      </div>
    </div>
  );
};
