import classNames from "classnames";
import style from "./styles.module.scss";
import { ProjectCard, SkeletonCard, useGetPageProjectsQuery } from "entities/project";
import { useState } from "react";
import { Paginator } from "shared/ui/paginator";
import { Error } from "shared/ui/error";
import { useWindowSize } from "@reactuses/core";
import { ProjectFrom, ProjectModal } from "features/project-form";

interface IProps {
  count: number;
  className?: string;
  params?: string;
}

export const ProjectListCommon: React.FC<IProps> = (props) => {
  const { count, className, params } = props;

  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetPageProjectsQuery({ page: page, limit: count, params });
  const { width } = useWindowSize();

  const [isHideForm, setHideForm] = useState(false);

  const getOffsetCards = () => {
    if (data?.projects) {
      const result = (data?.projects.length || 0) % 3;

      return result !== 0 ? result - 1 : result;
    }

    return 0;
  };

  if (isLoading) {
    return (
      <div className={style.list}>
        {Array(count)
          .fill("")
          .map((_, index) => (
            <SkeletonCard key={index} />
          ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <Error message="Сервер не отвечает" />
      </div>
    );
  }

  return (
    <div className={classNames(style.wrap, className)}>
      <div className={style.list}>
        {!isHideForm && (
          <>
            {width > 458 ? (
              <ProjectFrom onSubmit={(value) => setHideForm(value)} />
            ) : (
              <ProjectModal onSubmit={(value) => setHideForm(value)} />
            )}
          </>
        )}
        {data?.projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        {Array(getOffsetCards())
          .fill("")
          .map((_, index) => (
            <ProjectCard key={index} className={style.null_slot} />
          ))}
      </div>
      <Paginator
        isMobile={width < 680}
        className={style.paginator}
        defaultActivePage={1}
        setPage={setPage}
        pageCount={Math.round((data?.totalCount || 0) / count) + 1}
      />
    </div>
  );
};
