import style from "./styles.module.scss";
import { BurgerMenu } from "../sidebar/BurgerMenu";
import { Logotype } from "shared/ui/logotype";
import { Container } from "shared/ui/container";
import { SearchBox } from "features/house-filter";
import { useWindowSize } from "@reactuses/core";
import { Phone } from "../call/Phone";
import { ButtonCall } from "../call/ButtonCall";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/route-path";

interface IProps {
  burgerMenuClick: () => void;
}

export const Header: React.FC<IProps> = (props) => {
  const { burgerMenuClick } = props;

  const { width } = useWindowSize();
  const navigate = useNavigate();

  const clickLogotypeHandler = () => {
    navigate(RoutePath.HOME.path);
  };

  return (
    <header className={style.header}>
      <Container>
        <div className={style.content}>
          <div className={style.slice}>
            <BurgerMenu onClick={burgerMenuClick} />
            <Logotype onClick={clickLogotypeHandler} className={style.logotype} />
          </div>
          {width > 900 && <SearchBox />}
          <div className={style.slice}>
            {width > 600 && <Phone />}
            <ButtonCall isMobile={width < 460} />
          </div>
        </div>
      </Container>
    </header>
  );
};
