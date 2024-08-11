import { QuestionList } from "widgets/questions";
import { Page } from "../../components/page";
import { BlockSection } from "shared/ui/block-section";

const QuestionPage = () => {
  return (
    <Page isDefaultComponents name="Часто задаваемые вопросы">
      <BlockSection>
        <QuestionList />
      </BlockSection>
    </Page>
  );
};

export default QuestionPage;
