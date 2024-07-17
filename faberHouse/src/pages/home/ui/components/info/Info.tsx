import style from "./styles.module.scss";
import Num14Icon from "shared/assets/icons/num14.svg?react";
import ManipulateIcon from "shared/assets/icons/manipulate.svg?react";
import CheckIcon from "shared/assets/icons/check.svg?react";

export const Info: React.FC = () => {
  return (
    <div className={style.info}>
      <div className={style.info_inner}>
        <div className={style.indicator}></div>
        <div className={style.info_content}>
          <div className={style.item}>
            <Num14Icon />
            <p>14 лет на рынке</p>
          </div>
          <div className={style.item}>
            <ManipulateIcon />
            <p>Полный цикл производства</p>
          </div>
          <div className={style.item}>
            <CheckIcon />
            <p>Гарантия на все наши дома</p>
          </div>
        </div>
      </div>
    </div>
  );
};
