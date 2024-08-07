import { Container } from "shared/ui/container";
import { NewsList } from "./components/news-list/NewsList";
import style from "./styles.module.scss";
import HouseIcon from "shared/assets/icons/house.svg?react";
import { Guarantees } from "widgets/guarantees";
import { About } from "widgets/about";

const NewsPage = () => {
  return (
    <div className={style.page}>
      <Container>
        <div className={style.header}>
          <HouseIcon className={style.icon} />
          <h2>Новости</h2>
        </div>
      </Container>
      <div className={style.news_wrap}>
        <Container>
          <NewsList limit={5} />
        </Container>
      </div>
      <Container>
        <Guarantees/>
        <About/>
      </Container>
    </div>
  );
};

export default NewsPage;
