import classNames from "classnames";
import  "./styles.scss";
import { Accordion, AccordionTab } from "primereact/accordion";
import { AnswerBody, useGetAllQuestionQuery, useLazyGetAnswerByQuestionIdQuery } from "entities/question";
import { useState } from "react";
import { Laoder } from "shared/ui/loader";
import { Error } from "shared/ui/error";

interface IProps {
  className?: string;
}

export const QuestionList: React.FC<IProps> = (props) => {
  const { className } = props;

  const { data, isLoading, isError } = useGetAllQuestionQuery();
  const [getAnswer, result] = useLazyGetAnswerByQuestionIdQuery();
  const [activeIndex, setActiveIndex] = useState(-1);

  const getAnswerHandler = async (index: number | number[]) => {
    if (data && typeof index === "number") {
      setActiveIndex(index);
      await getAnswer(data[index].id || 0);
    }
  };

  if(isLoading){
    return <Laoder/>
  }

  if(isError){
    return(
      <div>
        <Error message="Ошибка сервера."/>
      </div>
    )
  }

  return (
    <div className={classNames('question_list_wrap', className)}>
      <Accordion activeIndex={activeIndex} onTabChange={(e) => getAnswerHandler(e.index)}>
        {data?.map((question) => (
          <AccordionTab className="accordion_tab" header={question.question}>
            {result.isLoading && <Laoder />}
            {result.data && <AnswerBody {...result.data} />}
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );
};
