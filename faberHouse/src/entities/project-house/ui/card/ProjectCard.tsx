import style from "./styles.module.scss";
import { IProject } from "../../model/types";
import classNames from "classnames";
import { Button, enumStyleButton } from "shared/ui/button";

interface IProps {
  project?: IProject;
  className?: string;
  onClick?: () => void
}

export const ProjectCard: React.FC<IProps> = (props) => {
  const { className, project, onClick } = props;

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
          <Button onClick={onClick} className={style.btn} stylePattern={enumStyleButton.BORDER}>Подробности</Button>
        </div>
      </div>
    </div>
  );
};
