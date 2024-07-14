import { Link, useNavigate } from "react-router-dom";
import style from "./styles.module.scss";
import { enumPath, RoutePath } from "shared/config/route-path";

export const Navigator = () => {
  const navigate = useNavigate();

  const navigateHandler = (path: enumPath) => {
    navigate(RoutePath[path].path);
  };

  return (
    <nav className={style.nav}>
      <Link onClick={() => navigateHandler(enumPath.PROJECTS)} to={RoutePath.PROJECTS.path}>
        {RoutePath.PROJECTS.name}
      </Link>
      <Link onClick={() => navigateHandler(enumPath.SERVICES)} to={RoutePath.SERVICES.path}>
        {RoutePath.SERVICES.name}
      </Link>
      <Link onClick={() => navigateHandler(enumPath.ABOUT)} to={RoutePath.ABOUT.path}>
        {RoutePath.ABOUT.name}
      </Link>
      <Link onClick={() => navigateHandler(enumPath.WORKS)} to={RoutePath.WORKS.path}>
        {RoutePath.WORKS.name}
      </Link>
      <Link onClick={() => navigateHandler(enumPath.REVIEWS)} to={RoutePath.REVIEWS.path}>
        {RoutePath.REVIEWS.name}
      </Link>
      <Link onClick={() => navigateHandler(enumPath.STOCKS)} to={RoutePath.STOCKS.path}>
        {RoutePath.STOCKS.name}
      </Link>
      <Link onClick={() => navigateHandler(enumPath.CONTACTS)} to={RoutePath.CONTACTS.path}>
        {RoutePath.CONTACTS.name}
      </Link>
    </nav>
  );
};
