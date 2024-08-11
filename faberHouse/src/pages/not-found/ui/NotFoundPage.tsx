import { useNavigate } from "react-router-dom";
import style from "./styles.module.scss";
import { RoutePath } from "shared/config/route-path";
import { Button } from "shared/ui/button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const ReturnToMainPageHandler = () => {
    navigate(RoutePath.HOME.path);
  };

  return (
    <div className={style.page}>
      <div className={style.content}>
        <h1>404</h1>
        <div>
          <p>Страница не найдена</p>
          <Button className={style.btn} onClick={ReturnToMainPageHandler}>Вернуться на главную</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
