import { QuestionList } from "widgets/questions";
import { Page } from "../../components/page";
import { BlockSection } from "shared/ui/block-section";
import { RoutePath } from "shared/config/route-path";

const QuestionPage = () => {
  return (
    <Page sections={[RoutePath.ABOUT.name || 'error']} isDefaultComponents name="Часто задаваемые вопросы">
      <BlockSection>
        <QuestionList />
      </BlockSection>
    </Page>
  );
};

export default QuestionPage;
