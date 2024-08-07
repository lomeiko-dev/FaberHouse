import classNames from "classnames";
import style from "./styles.module.scss";
import { NewsItem, Skeleton, useGetPageNewsQuery } from "entities/news";
import { useState } from "react";
import { Paginator } from "shared/ui/paginator";
import { Error } from "shared/ui/error";

interface IProps {
  className?: string;
  limit: number;
}

export const NewsList: React.FC<IProps> = (props) => {
  const { limit, className } = props;

  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetPageNewsQuery({ page, limit });

  if(isLoading){
    return(
        <div className={style.list}>
            {Array(limit).fill('').map(() => <Skeleton/>)}
        </div>
    )
  }

  if(isError){
    return(
        <div className={style.wrap}>
            <Error message="Ошибка сервера."/>
        </div>
    )
  }

  return (
    <div className={classNames(style.wrap, className)}>
      <div className={style.list}>
        {data?.news.map((news) => (
          <NewsItem onClick={() => null} {...news} />
        ))}
      </div>
      <Paginator
        className={style.paginator}
        defaultActivePage={1}
        setPage={setPage}
        pageCount={Math.round((data?.totalCount || 0) / limit)}
      />
    </div>
  );
};
