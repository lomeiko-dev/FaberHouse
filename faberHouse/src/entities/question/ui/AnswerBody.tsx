import classNames from "classnames";
import { IAnswer, IContentBlock } from "../model/types";
import style from "./styles.module.scss";

interface IProps extends IAnswer {
  className?: string;
}

export const AnswerBody: React.FC<IProps> = (props) => {
  const { contents, className } = props;

  const generateContent = (block: IContentBlock) => {
    switch (block.type) {
      case "text":
        return <p>{block.content}</p>;
      case "image":
        return <img src={block.content} alt="image" />;
    }
  };

  return (
    <div className={classNames(style.body, className)}>
      {contents.map((content) => generateContent(content))}
    </div>
  );
};
