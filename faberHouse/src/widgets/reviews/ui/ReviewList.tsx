import style from "./style.module.scss";
import classNames from "classnames";
import { Review, useGetPageReviewsQuery } from "entities/review";
import { Error } from "shared/ui/error";
import CommentIcon from "shared/assets/icons/comment.svg?react";
import ArrowRight from "shared/assets/icons/arrow-right.svg?react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/route-path";

interface IProps {
  className?: string;
  limit: number;
}

export const ReviewList: React.FC<IProps> = (props) => {
  const { className, limit } = props;

  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetPageReviewsQuery({ page, limit });

  const incrementPage = () => {
    if (page * limit < (data?.totalCount || 0)) setPage(page + 1);
    else {
      navigate(RoutePath.REVIEWS.path);
    }
  };

  if (isLoading) {
    return <div className={style.list}>...loading</div>;
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
            {page*limit} — {data?.totalCount}
          </p>
          <button onClick={incrementPage}>
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
