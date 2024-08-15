import style from "./style.module.scss";
import classNames from "classnames";
import { Review, useGetPageReviewsQuery } from "entities/review";
import { Error } from "shared/ui/error";
import CommentIcon from "shared/assets/icons/comment.svg?react";
import ArrowRight from "shared/assets/icons/arrow-right.svg?react";

interface IProps {
  className?: string;
  limit: number;
}

export const ReviewList: React.FC<IProps> = (props) => {
  const { className, limit } = props;

  const { data, isLoading, isError } = useGetPageReviewsQuery({ page: 1, limit });

  if (isLoading) {
    return (
      <div className={style.list}>
        ...loading
      </div>
    );
  }

  if (isError) {
    return <Error message="Ошибка сервера." />;
  }

  return (
    <div className={classNames(style.reviews_about, className)}>
      <div className={style.header}>
        <div className={style.left_part}>
          <CommentIcon />
          <h2>Отзывы о нашей работе</h2>
        </div>
        <div className={style.right_part}>
          <p>
            {limit} — {data?.totalCount}
          </p>
          <button>
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className={style.list}>
        {data?.reviews.map((review) => (
          <Review {...review} />
        ))}
      </div>
    </div>
  );
};
