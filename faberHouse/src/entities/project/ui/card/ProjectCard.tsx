import style from "./styles.module.scss";
import { IProject } from "../../model/types";
import classNames from "classnames";

interface IProps {
  project?: IProject;
  className?: string;
}

export const ProjectCard: React.FC<IProps> = (props) => {
  const { className, project } = props;

  return (
    <div className={classNames(style.card, className)}>
      <img src={project?.images[0]} alt="project image" />
      <div className={style.content}>
        <h3>{project?.title}</h3>
        <div className={style.block}>
          <div className={style.slice}>
            <p className={style.square}>{project?.square} м2</p>
            <p className={style.price}>{project?.price} ₽</p>
          </div>
          <button>Подробности</button>
        </div>
      </div>
    </div>
  );
};
