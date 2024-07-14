import { Link, useNavigate } from "react-router-dom";
import style from "./styles.module.scss";
import { enumPatch, RoutePatch } from "shared/config/route-path";

export const Navigator = () => {
  const navigate = useNavigate();

  const navigateHandler = (patch: enumPatch) => {
    navigate(RoutePatch[patch].patch);
  };

  return (
    <nav className={style.nav}>
      <Link onClick={() => navigateHandler(enumPatch.PROJECTS)} to={RoutePatch.PROJECTS.patch}>
        {RoutePatch.PROJECTS.name}
      </Link>
      <Link onClick={() => navigateHandler(enumPatch.SERVICES)} to={RoutePatch.SERVICES.patch}>
        {RoutePatch.SERVICES.name}
      </Link>
      <Link onClick={() => navigateHandler(enumPatch.ABOUT)} to={RoutePatch.ABOUT.patch}>
        {RoutePatch.ABOUT.name}
      </Link>
      <Link onClick={() => navigateHandler(enumPatch.WORKS)} to={RoutePatch.WORKS.patch}>
        {RoutePatch.WORKS.name}
      </Link>
      <Link onClick={() => navigateHandler(enumPatch.REVIEWS)} to={RoutePatch.REVIEWS.patch}>
        {RoutePatch.REVIEWS.name}
      </Link>
      <Link onClick={() => navigateHandler(enumPatch.STOCKS)} to={RoutePatch.STOCKS.patch}>
        {RoutePatch.STOCKS.name}
      </Link>
      <Link onClick={() => navigateHandler(enumPatch.CONTACTS)} to={RoutePatch.CONTACTS.patch}>
        {RoutePatch.CONTACTS.name}
      </Link>
    </nav>
  );
};
