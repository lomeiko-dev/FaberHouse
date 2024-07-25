import { ProjectItem, SkeletonItem, useGetPageProjectsQuery } from "entities/project-house";
import style from "./styles.module.scss";
import classNames from "classnames";
import { Error } from "shared/ui/error";

interface IProps {
  title?: string;
  count: number;
  className?: string,
  params?: string,
}

export const ProjectListPreview: React.FC<IProps> = (props) => {
  const { count, title, className, params } = props;

  const { data, isLoading, isError } = useGetPageProjectsQuery({ page: 1, limit: count, params });

  if(isLoading){
    return(
      <div className={style.list}>
        {Array(count).fill('').map((_, index) => <SkeletonItem key={index}/>)}
      </div>
    )
  }

  if(isError){
    return(
      <Error message="Сервер не отвечает"/>
    )
  }

  return (
    <div className={classNames(style.wrap, className)}>
      {title && <h2>{title}</h2>}
      <div className={style.list}>
        {data?.projects.map((project, index) => (
          <ProjectItem key={project.id} project={project} cardPosition={index % 2 === 0 ? "right" : "left"} />
        ))}
      </div>
    </div>
  );
};
