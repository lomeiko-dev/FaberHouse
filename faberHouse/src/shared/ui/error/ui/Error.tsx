import classNames from "classnames";
import style from "./styles.module.scss";

interface IProps {
  className?: string;
  message: string;
}

export const Error: React.FC<IProps> = (props) => {
  const { message, className } = props;
  return <p className={classNames(style.message, className)}>{message}</p>;
};
