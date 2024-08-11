import { NewsList } from "./components/news-list/NewsList";
import { Page } from "../../components/page";
import { BlockSection } from "shared/ui/block-section";

const NewsPage = () => {
  return (
    <Page isDefaultComponents name="Новости">
      <BlockSection>
          <NewsList limit={5} />
      </BlockSection>
    </Page>
  );
};

export default NewsPage;
