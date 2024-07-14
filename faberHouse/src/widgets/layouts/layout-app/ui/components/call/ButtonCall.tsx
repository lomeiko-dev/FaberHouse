import style from "./styles.module.scss";
import PhoneIcon from "shared/assets/icons/phone.svg?react";

interface IProps {
  isMobile: boolean;
}

export const ButtonCall: React.FC<IProps> = (props) => {
  const { isMobile } = props;
  return (
    <>
      {isMobile ? (
        <button className={style.button_call}>
          <PhoneIcon />
        </button>
      ) : (
        <button className={style.button}>Заказать звонок</button>
      )}
    </>
  );
};
