import { Container } from "shared/ui/container";
import style from "./styles.module.scss";
import { QuestionList } from "widgets/questions";
import { Page } from "../../components/page";

const QuestionPage = () => {
  return (
    <Page isDefaultComponents name="Часто задаваемые вопросы">
      <div className={style.question_list_wrap}>
        <Container>
            <QuestionList/>
        </Container>
      </div>
    </Page>
  );
};

export default QuestionPage;
