import { Container } from "shared/ui/container";
import style from "./styles.module.scss";
import HouseIcon from "shared/assets/icons/house.svg?react";
import { QuestionList } from "widgets/questions";
import { Guarantees } from "widgets/guarantees";
import { About } from "widgets/about";

const QuestionPage = () => {
  return (
    <div className={style.page}>
      <Container>
        <div className={style.header}>
          <HouseIcon className={style.icon} />
          <h2>Часто задаваемые вопросы</h2>
        </div>
      </Container>
      <div className={style.question_list_wrap}>
        <Container>
            <QuestionList/>
        </Container>
      </div>
      <Container>
        <Guarantees/>
        <About/>
      </Container>
    </div>
  );
};

export default QuestionPage;
