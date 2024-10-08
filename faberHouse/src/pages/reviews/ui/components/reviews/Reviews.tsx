import { useState } from "react";
import style from "./styles.module.scss";
import { Review, useGetPageReviewsQuery } from "entities/review";
import { Paginator } from "shared/ui/paginator";
import { Error } from "shared/ui/error";
import classNames from "classnames";
import { Container } from "shared/ui/container";
import { useWindowSize } from "@reactuses/core";
import { ReviewForm } from "features/review-form";
import { Laoder } from "shared/ui/loader";

interface IProps {
  className?: string;
  limit: number;
}

export const Reviews: React.FC<IProps> = (props) => {
  const { limit, className } = props;

  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetPageReviewsQuery({ page, limit });
  const [isHideForm, setHideForm] = useState(false);
  const { width } = useWindowSize();

  if (isLoading) {
    return (
      <div className={style.list}>
        <Laoder/>
      </div>
    );
  }

  if (isError) {
    return <Error message="Ошибка сервера." />;
  }

  return (
    <div className={classNames(style.reviews, className)}>
      <Container>
        <div className={style.list}>
          {!isHideForm && <ReviewForm onSubmit={() => setHideForm(true)} className={style.review}/>}
          {data?.reviews.map((review) => (
            <Review className={style.review} {...review} />
          ))}
        </div>
        <div className={style.paginator}>
          <Paginator
            isMobile={width < 768}
            defaultActivePage={1}
            pageCount={Math.round((data?.totalCount || 0) / 9)}
            setPage={setPage}
          />
        </div>
      </Container>
    </div>
  );
};
