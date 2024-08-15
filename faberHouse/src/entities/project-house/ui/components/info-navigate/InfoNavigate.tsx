import classNames from "classnames";
import style from "./styles.module.scss";
import { enumInfoNavigate, infoNavigation } from "../../../model/types";
import { useState } from "react";

interface IProps {
  className?: string;
  onClick: (key: string) => void;
}

export const InfoNavigate: React.FC<IProps> = (props) => {
  const { className, onClick } = props;

  const [selected, setSelected] = useState<string>(enumInfoNavigate.COMPLECTATION);

  const clickButtonHandler = (key: string) => {
    setSelected(key);
    onClick(key)
  };

  return (
    <div className={classNames(style.navigate, className)}>
      {Object.entries(infoNavigation).map(([key, value]) => (
        <button onClick={() => clickButtonHandler(key)} className={selected === key ? style.selected : ""}>
          {value}
        </button>
      ))}
    </div>
  );
};
