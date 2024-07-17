import style from "./styles.module.scss";
import lototype from "shared/assets/img/logo-secondary.webp";
import woman from "shared/assets/img/woman.png";
import { useWindowSize } from "@reactuses/core";

export const BlockTesting = () => {
  const { width } = useWindowSize();

  return (
    <div className={style.block}>
      <div className={style.section}>
        <h3>Узнайте стоимость дома и получите скидку на строительство</h3>
        <p>
          Пройдите несложный тест и рассчитайте стоимость дома, а также получите гарантированную скидку на строительство
        </p>
        <button>Пройти тест</button>
      </div>
      {width > 600 && (
        <>
          <img className={style.logotype} src={lototype} alt="logotype site" />
          <img className={style.woman} src={woman} alt="woman" />
        </>
      )}
    </div>
  );
};
