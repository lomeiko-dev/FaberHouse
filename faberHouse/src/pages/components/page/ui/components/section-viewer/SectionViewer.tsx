import React from "react";
import style from "./styles.module.scss";
import HouseIcon from "shared/assets/icons/house.svg?react";
import classNames from "classnames";

interface IProps {
  sections?: string[];
  className?: string;
}

export const SectionViewer: React.FC<IProps> = (props) => {
  const { sections, className } = props;

  return (
    <div className={classNames(style.viewer, className)}>
      <HouseIcon className={style.icon} />
      {sections?.map((item) => (
        <div className={style.section_wrap}>
            <span></span>
            <div className={style.section}>{item}</div>
        </div>
      ))}
    </div>
  );
};
