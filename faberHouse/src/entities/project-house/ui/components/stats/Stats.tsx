import classNames from "classnames";
import style from "./styles.module.scss";
import { IProject } from "../../../model";

interface IProps {
  className?: string;
  project: IProject;
  title: string
}

export const Stats: React.FC<IProps> = (props) => {
  const { className, project, title } = props;

  return (
    <div className={classNames(style.stats, className)}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.info}>
        <p>Серия: {project.series}</p>
        <p>Технология: {project.technology}</p>
        <p>Размер: {project.size}</p>
        <p>Дополнительно: {project.additionally}</p>
        <p>Количество комнат: {project.roomCount}</p>
        <p>Площадь: {project.square} м2</p>
      </div>
    </div>
  );
};
