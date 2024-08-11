import classNames from "classnames";
import style from "./styles.module.scss";
import { ListItem } from "shared/ui/list-item";
import illustration from "shared/assets/img/illustration-2.webp";
import { useWindowSize } from "@reactuses/core";
import { CompanyStats } from "shared/components/company-stats";

interface IProps {
  className?: string;
}

export const AboutCompany: React.FC<IProps> = (props) => {
  const { className } = props;

  const { width } = useWindowSize();

  return (
    <div className={classNames(style.about, className)}>
      <div className={style.left_part}>
        <p>
          Legno Domus — это современная компания, которая успешно осуществляет возведение, продажу и разработку проектов
          зданий. Все наши сотрудники являются специалистами с высокой квалификацией. У нас клиенты всегда могут
          получить подробную консультацию насчет выбора заказа, и мы с радостью ответим на все интересующие вопросы
        </p>
        <div className={style.info_card}>
          <p>Уже построили более 800 домов и бань по всей России</p>
        </div>
        <div className={style.advantages}>
          <p className={style.title}>Преимущества сотрудничества с нами</p>
          <div className={style.list}>
            <ListItem title="Собственное производство и возможность автономного возведения зданий, независимо от других фирм. Поэтому у нас недорогие и качественные дома за короткий срок!" />
            <ListItem title="Высококачественные материалы. Деревянные дома возводятся из экологически чистого сырья без вредных для здоровья добавок." />
            <ListItem title="Возможность для клиента избавиться от хлопот по доставке и установке, так как все это наши заботы." />
          </div>
        </div>
      </div>
      <div className={style.right_part}>
        <img src={illustration} alt="illustration" />
        {width > 560 && <CompanyStats />}
      </div>
    </div>
  );
};
