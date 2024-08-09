import style from "./styles.module.scss";
import classNames from "classnames";
import CommentIcon from "shared/assets/icons/comment.svg?react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Input, Textarea } from "shared/ui/input";
import { checkForm, clearForm, reviewFormSelection, setComment, setName } from "../model";
import { useAppSelector } from "shared/lib/hooks/useAppSelector";
import { useEffect, useState } from "react";
import { useAddReviewMutation } from "../model/api/add-review-api";
import { Button } from "shared/ui/button";

interface IProps {
  onSubmit?: () => void;
  className?: string;
}

export const ReviewForm: React.FC<IProps> = (props) => {
  const { className, onSubmit } = props;

  const dispatch = useAppDispatch();
  const store = useAppSelector(reviewFormSelection);
  const [sendReview, result] = useAddReviewMutation();
  const [shouldSubmit, setShould] = useState(false);

  const sendFormHanlder = () => {
    dispatch(checkForm());
    setShould(true);
  };

  useEffect(() => {
    const handler = async () => {
      if (!store.isErrors) {
        await sendReview({ name: store.name, comment: store.comment });
      }
    };

    if (shouldSubmit) {
      handler();
      setShould(false);
    }
  }, [shouldSubmit]);

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(clearForm());
      setTimeout(() => {
        onSubmit?.();
      }, 1500);
    }
  }, [result.isSuccess]);

  return (
    <div className={classNames(style.form, className)}>
      {result.isSuccess ? (
        <p className={style.success}>Сообщение успешно отправлено!</p>
      ) : (
        <>
          <div className={style.header}>
            <CommentIcon />
            <h3>Вы можете оставить отзыв о нас</h3>
          </div>
          <div className={style.form_inner}>
            <Input
              value={store.name}
              isError={store.isNameError}
              getValue={(value) => dispatch(setName(value))}
              placeholder="Имя"
            />
            <Textarea
              value={store.comment}
              isError={store.isCommentError}
              className={style.textarea}
              getValue={(value) => dispatch(setComment(value))}
              placeholder="Текст отзыва"
            />
            <Button onClick={sendFormHanlder}>Оставить отзыв</Button>
          </div>
          <a href="#">
            Нажимая кнопку «Отправить» вы соглашаетесь с пользовательским соглашением и ознакомились с нашей политикой
            конфиденциальности
          </a>
        </>
      )}
    </div>
  );
};
