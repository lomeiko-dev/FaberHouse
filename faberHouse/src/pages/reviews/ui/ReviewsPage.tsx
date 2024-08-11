import { Reviews } from "./components/reviews/Reviews";
import { Page } from "../../components/page";

const ReviewsPage = () => {
  return (
    <Page isDefaultComponents name="Отзывы о нас">
      <Reviews limit={9} />
    </Page>
  );
};

export default ReviewsPage;
