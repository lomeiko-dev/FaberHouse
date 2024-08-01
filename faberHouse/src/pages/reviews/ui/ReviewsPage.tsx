import { Container } from "shared/ui/container";
import { Reviews } from "./components/reviews/Reviews";
import style from "./style.module.scss";
import HouseIcon from "shared/assets/icons/house.svg?react";
import { Guarantees } from "widgets/guarantees";
import { About } from "widgets/about";

const ReviewsPage = () => {
  return (
    <div className={style.page}>
      <Container>
        <HouseIcon className={style.icon} />
        <h1>Отзывы о нас</h1>
      </Container>
      <Reviews className={style.reviews} limit={9} />
      <Container>
        <Guarantees/>
        <About/>
      </Container>
    </div>
  );
};

export default ReviewsPage;
