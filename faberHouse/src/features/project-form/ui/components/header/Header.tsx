import classNames from "classnames";
import style from "./styles.module.scss";
import Plan from "shared/assets/img/plan.webp";

interface IProps {
    className?: string
}

export const Header: React.FC<IProps> = (props) => {
    const {className} = props
  return (
    <div className={classNames(style.header, className)}>
      <img src={Plan} alt="plan icon" />
      <h3>Отправьте свой проект на бесплатный расчет</h3>
    </div>
  );
};
