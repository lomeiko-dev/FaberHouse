import classNames from "classnames";
import { IService } from "../model/types";
import style from "./styles.module.scss";
import { NumberCard } from "shared/components/number-card";

interface IProps extends IService {
  className?: string;
  index: number;
}

export const ServiceCard: React.FC<IProps> = (props) => {
  const { description, index, title, className } = props;

  return (
    <NumberCard count={index} className={classNames(style.card, className)}>
      <h4>{title}</h4>
      <p>{description}</p>
    </NumberCard>
  );
};
