import { Logotype } from "shared/ui/logotype";
import style from "./styles.module.scss";
import { Phone } from "../call/Phone";
import { SearchBox } from "features/house-filter";
import { ButtonCall } from "../call/ButtonCall";
import { SocialList } from "../social-list/SocialList";
import classNames from "classnames";
import { Navigator } from "../nav/Navigator";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/route-path";

interface IProps {
  className?: string;
}

export const SidebarContent: React.FC<IProps> = (props) => {
  const { className } = props;

  const navigate = useNavigate()

  const onClickLogotypeHandler = () => {
    navigate(RoutePath.HOME.path)
  }

  return (
    <section className={classNames(style.sidebar, className)}>
      <div className={classNames(style.container, style.logotype_wrap)}>
        <Logotype onClick={onClickLogotypeHandler}/>
      </div>
      <div className={style.nav_menu}>
        <div className={classNames(style.container, style.nav_menu_inner)}>
          <Phone />
          <Navigator />
        </div>
      </div>
      <div className={classNames(style.container, style.other_wrap)}>
        <SearchBox />
        <ButtonCall isMobile={false} />
        <SocialList />
        <a href="#">Пользовательское соглашение</a>
        <a href="#">Политика конфиденциальности</a>
      </div>
    </section>
  );
};
