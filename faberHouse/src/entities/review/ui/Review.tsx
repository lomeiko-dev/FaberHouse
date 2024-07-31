import classNames from "classnames";
import style from "./Review.module.scss";
import { IReview } from "../model/types";

interface IProps extends IReview {
  className?: string;
}

export const Review: React.FC<IProps> = (props) => {
  const { comment, name, answer, nameAdmin, className } = props;
  return (
    <div className={classNames(style.review_wrap, className)}>
      <div className={style.review}>
        <p>{comment}</p>
        <p>{name}</p>
      </div>
      {answer && (
        <div className={style.answer}>
          <span></span>
          <p>{answer}</p>
          <p>С уважением, {nameAdmin}</p>
        </div>
      )}
    </div>
  );
};
