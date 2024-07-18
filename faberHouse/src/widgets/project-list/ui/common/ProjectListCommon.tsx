import classNames from "classnames";
import style from "./styles.module.scss";
import { ProjectCard, SkeletonCard, useGetPageProjectsQuery } from "entities/project";
import { useState } from "react";
import { Paginator } from "shared/ui/paginator";
import { Error } from "shared/ui/error";

interface IProps {
  count: number;
  className?: string;
  params?: string;
}

export const ProjectListCommon: React.FC<IProps> = (props) => {
  const { count, className, params } = props;

  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetPageProjectsQuery({ page: page, limit: count, params });

  if (isLoading) {
    return (
      <div className={style.list}>
        {Array(count).fill('').map((_, index) => <SkeletonCard key={index}/>)}
      </div>
    );
  }

  if (isError){
    return(
      <div>
        <Error message="Сервер не отвечает"/>
      </div>
    )
  }

  return (
    <div className={classNames(style.wrap, className)}>
      <div className={style.list}>
        {data?.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <Paginator
        className={style.paginator}
        defaultActivePage={1}
        setPage={setPage}
        pageCount={Math.round((data?.totalCount || 0) / count)}
      />
    </div>
  );
};
