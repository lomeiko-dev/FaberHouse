import classNames from "classnames";
import style from "./styles.module.scss";
import { NavItem } from "../nav-item/NavItem";

interface IProps {
  className?: string;
}

export const Navigation: React.FC<IProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(style.navigation, className)}>
      <h4>
        Обратившись в Legno Domus, можно получить полный спектр качественных услуг, которые обеспечивают комфортное
        проживание в доме
      </h4>

      <nav>
        <NavItem link="" title="Собственное производство"/>
        <NavItem link="" title="Часто задаваемые вопросы"/>
        <NavItem link="" title="Новости"/>
      </nav>
    </div>
  );
};
