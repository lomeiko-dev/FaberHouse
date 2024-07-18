import style from "./styles.module.scss";
import { advantageList } from "../model/config/advantage-list";
import { ItemTitle } from "./components/item-title/ItemTitle";
import { offerList, offerListSecondary } from "../model/config/offer-list";
import illustration from "shared/assets/img/illustration-1.webp";
import MobileIcon from "shared/assets/icons/mobile.svg?react";

export const About = () => {
  return (
    <div className={style.about}>
      <div className={style.block}>
        <h2 className={style.title}>Несколько слов о нас</h2>
        <p className={style.description}>
          Компания Legno Domus занимается строительством домов из дерева в Москве и Московской области. На нашем сайте
          вы сможете найти готовые типовые проекты каркасных и брусовых деревянных сооружений. Кроме того, мы можем
          построить здание любого типа сложности по вашему индивидуальному проекту.
        </p>
        <div className={style.advantages}>
          <h3>Преимущества сотрудничества с нами</h3>
          <div className={style.list}>
            {advantageList.map((item, index) => (
              <ItemTitle key={index} title={item} />
            ))}
          </div>
        </div>
        <p className={style.sub_title}>
          Для получения более подробной информации по строительству домов под ключ вы можете позвонить нам по телефону.
          Персональный менеджер поможет рассчитать примерную стоимость постройки и ответит на все интересующие вопросы.
        </p>
      </div>
      <div className={style.block_right}>
        <img src={illustration} alt="illustration" />
        <div className={style.offers}>
          <h3 className={style.title}>Предложение компании Legno Domus</h3>
          <p className={style.sub_title}>
            Вы можете заказать строительство следующих вариантов деревянных домов и коттеджей:
          </p>
          <div className={style.list}>
            {offerList.map((item, index) => (
              <ItemTitle key={index} title={item} />
            ))}
          </div>
          <p className={style.title_secondary}>
            Мы осуществляем постройку сооружений различной этажности и размеров. Помимо непосредственного возведения
            деревянных домов, мы выполняем следующие виды работ:
          </p>
          <div className={style.list}>
            {offerListSecondary.map((item, index) => (
              <ItemTitle key={index} title={item} />
            ))}
          </div>
        </div>
        <div className={style.adress}>
          <div className={style.mobile}>
            <MobileIcon className={style.icon} />
            <p>+7 495 902 61 04</p>
          </div>
          <p>Москва, Каширское шоссе, владение 63, корпус 1, строение 52 Режим работы выставки с 10:00 до 20:00</p>
        </div>
      </div>
    </div>
  );
};
