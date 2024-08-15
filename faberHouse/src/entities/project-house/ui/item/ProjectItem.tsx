import style from "./styles.module.scss";
import { IProject } from "../../model/types";
import { useState } from "react";
import classNames from "classnames";
import ArrowRightIcon from "shared/assets/icons/arrow-right.svg?react";
import ImagesIcon from "shared/assets/icons/images.svg?react";
import { Button } from "shared/ui/button";
import { Stats } from "../components/stats/Stats";

interface IProps {
  project: IProject;
  cardPosition: "left" | "right";
  className?: string;
}

export const ProjectItem: React.FC<IProps> = (props) => {
  const { cardPosition, project, className } = props;

  const [photoIndex, setPhotoIndex] = useState(0);

  const upIndexPhotoHandler = () => {
    if (photoIndex === project.images.length - 1) {
      setPhotoIndex(0);
      return;
    }

    setPhotoIndex(photoIndex + 1);
  };

  const mods = {
    [style.item_left]: cardPosition === "left",
    [style.item_right]: cardPosition === "right",
  };

  return (
    <div className={classNames(style.item, mods, className)}>
      <div style={{ backgroundImage: `url(${project.images[photoIndex]})` }} className={style.photo}>
        <div className={style.photo_inner}>
          <div className={style.slider}>
            <div className={style.slider_inner}>
              <button onClick={upIndexPhotoHandler}>
                <ArrowRightIcon className={style.arrow} />
              </button>
              <p>
                {photoIndex + 1} — {project.images.length}
              </p>
              <ImagesIcon className={style.icon} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <Stats title={project.title} project={project}/>
        <div className={style.footer}>
          <div className={style.price}>{project.price} ₽</div>
          <Button className={style.btn}>Подробности</Button>
        </div>
      </div>
    </div>
  );
};
