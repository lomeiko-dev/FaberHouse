import classNames from "classnames";
import style from "./styles.module.scss";
import { NavItem } from "shared/components/nav-item";
import { RoutePath } from "shared/config/route-path";

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
        <NavItem href="#" title="Собственное производство" />
        <NavItem href={RoutePath.QUESTION.path} title="Часто задаваемые вопросы" />
        <NavItem href={RoutePath.NEWS.path} title="Новости" />
      </nav>
    </div>
  );
};
