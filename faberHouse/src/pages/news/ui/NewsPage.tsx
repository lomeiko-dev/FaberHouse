import { Container } from "shared/ui/container";
import { NewsList } from "./components/news-list/NewsList";
import style from "./styles.module.scss";
import { Page } from "../../components/page";

const NewsPage = () => {
  return (
    <Page isDefaultComponents name="Новости">
      <div className={style.news_wrap}>
        <Container>
          <NewsList limit={5} />
        </Container>
      </div>
    </Page>
  );
};

export default NewsPage;
