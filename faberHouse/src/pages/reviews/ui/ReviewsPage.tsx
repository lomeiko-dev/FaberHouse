import { Reviews } from "./components/reviews/Reviews";
import style from "./style.module.scss";
import { Page } from "../../components/page";

const ReviewsPage = () => {
  return (
    <Page isDefaultComponents name="Отзывы о нас">
      <Reviews className={style.reviews} limit={9} />
    </Page>
  );
};

export default ReviewsPage;
