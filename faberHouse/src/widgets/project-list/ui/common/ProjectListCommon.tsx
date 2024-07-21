import classNames from "classnames";
import style from "./styles.module.scss";
import { ProjectCard, SkeletonCard, useGetPageProjectsQuery } from "entities/project";
import { useEffect, useRef, useState } from "react";
import { Paginator } from "shared/ui/paginator";
import { Error } from "shared/ui/error";
import { useWindowSize } from "@reactuses/core";
import { ProjectFrom, ProjectModal } from "features/project-form";

interface IProps {
  className?: string;
  params?: string;
}

export const ProjectListCommon: React.FC<IProps> = (props) => {
  const { className, params } = props;

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(17);
  const { data, isLoading, isError } = useGetPageProjectsQuery({ page: page, limit: count, params });
  const { width } = useWindowSize();

  const [isHideForm, setHideForm] = useState(false);
  const refAnchor = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isHideForm) {
      setCount(18);
    }
  }, [isHideForm]);

  useEffect(() => {
    setCount(page > 1 ? 18 : 17);

    if (refAnchor.current)
      refAnchor.current.scrollIntoView({
        behavior: "smooth",
      });
  }, [page]);

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
      <div ref={refAnchor}></div>
      <div className={style.list}>
        {!isHideForm && page === 1 && (
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
      </div>
      <Paginator
        isMobile={width < 680}
        className={style.paginator}
        defaultActivePage={1}
        setPage={setPage}
        pageCount={Math.ceil((data?.totalCount || 0) / count)}
      />
    </div>
  );
};
