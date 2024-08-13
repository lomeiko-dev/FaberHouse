import { NewsList } from "./components/news-list/NewsList";
import { Page } from "../../components/page";
import { BlockSection } from "shared/ui/block-section";
import { RoutePath } from "shared/config/route-path";

const NewsPage = () => {
  return (
    <Page sections={[RoutePath.ABOUT.name || 'error']} isDefaultComponents name="Новости">
      <BlockSection>
          <NewsList limit={5} />
      </BlockSection>
    </Page>
  );
};

export default NewsPage;
