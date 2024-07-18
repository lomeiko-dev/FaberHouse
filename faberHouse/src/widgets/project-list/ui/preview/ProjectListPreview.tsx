import { ProjectItem, useGetPageProjectsQuery } from "entities/project";
import style from "./styles.module.scss";
import classNames from "classnames";

interface IProps {
  title?: string;
  count: number;
  className?: string,
  params?: string,
}

export const ProjectListPreview: React.FC<IProps> = (props) => {
  const { count, title, className, params } = props;

  const { data, isLoading, isError } = useGetPageProjectsQuery({ page: 1, limit: count, params });

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
