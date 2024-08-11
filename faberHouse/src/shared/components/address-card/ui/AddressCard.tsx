import classNames from "classnames";
import style from "./styles.module.scss";
import MobileIcon from "shared/assets/icons/mobile.svg?react";

interface IProps {
  className?: string;
}

export const AddressCard: React.FC<IProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(style.card, className)}>
      <div className={style.mobile}>
        <MobileIcon className={style.icon} />
        <p>+7 495 902 61 04</p>
      </div>
      <p>Москва, Каширское шоссе, владение 63, корпус 1, строение 52 Режим работы выставки с 10:00 до 20:00</p>
    </div>
  );
};
