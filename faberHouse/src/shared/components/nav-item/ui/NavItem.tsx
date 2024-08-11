import classNames from "classnames";
import style from "./styles.module.scss";
import { Button } from "shared/ui/button";
import { useNavigate } from "react-router-dom";

interface IProps {
  className?: string;
  href: string;
  title: string;
}

export const NavItem: React.FC<IProps> = (props) => {
  const { href, title, className } = props;

  const navigate = useNavigate()

  const goToLinkHandler = () => {
    navigate(href)
  }

  return (
    <div className={classNames(style.item, className)}>
      <p>{title}</p>
      <Button onClick={goToLinkHandler} className={style.btn}>Перейти в раздел</Button>
    </div>
  );
};
