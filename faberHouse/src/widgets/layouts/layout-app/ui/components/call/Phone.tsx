import style from './styles.module.scss'
import MobileIcon from "shared/assets/icons/mobile.svg?react";

export const Phone = () => {
  return (
    <div className={style.mobile}>
      <MobileIcon />
      <a href="tel:74959026104">+7 495 902 61 04</a>
    </div>
  );
};
