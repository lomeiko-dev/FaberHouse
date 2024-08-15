import classNames from "classnames";
import style from "./styles.module.scss";

interface IProps {
  className?: string;
  count: number;
  children: React.ReactNode;
}

export const NumberCard: React.FC<IProps> = (props) => {
  const { children, count, className } = props;

  return (
    <div className={classNames(style.card, className)}>
      <div className={style.count}>{count}</div>
      {children}
    </div>
  );
};
