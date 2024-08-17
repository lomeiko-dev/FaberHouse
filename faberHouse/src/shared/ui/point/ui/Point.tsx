import { IPoint } from "entities/project-house";
import style from "./styles.module.scss";
import classNames from "classnames";
import PointIcon from "shared/assets/icons/point.svg?react";

interface IProps {
  className?: string;
  title?: string;
  point: IPoint;
  isActive?: boolean;
  onClick?: () => void;
}

export const Point: React.FC<IProps> = (props) => {
  const { point, onClick, title, className, isActive } = props;

  const mods = {
    [style.active]: isActive,
  };

  return (
    <div
      onClick={onClick}
      style={{ top: `${point.x}px`, left: `${point.y}px` }}
      className={classNames(style.point, className, mods)}
    >
      {title && (
        <div className={style.title}>
          <p className={style.text}>{title}</p>
        </div>
      )}
      <PointIcon className={style.icon} />
    </div>
  );
};
