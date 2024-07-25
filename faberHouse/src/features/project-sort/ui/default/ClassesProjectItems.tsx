import { classesConfig } from "features/project-sort/model/config/sort-config";
import style from "../styles.module.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { ISortItem } from "features/project-sort/model/types";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { changeClassQueryString } from "features/project-sort/model";

interface IProps {
  className?: string;
  defaultSelectIndex?: number
}

export const ClassesProjectItems: React.FC<IProps> = (props) => {
  const { className, defaultSelectIndex } = props;

  const [selectedIndex, setSelected] = useState(defaultSelectIndex || 0);
  const [newClassesConfig, setClassesConfig] = useState(classesConfig);

  const dispatch = useAppDispatch();

  const changeSortSheme = (index: number) => {
    setSelected(index);
    dispatch(changeClassQueryString(newClassesConfig[index].option));
  };

  useEffect(() => {
    const newItem: ISortItem = { title: "Все проекты", option: "" };
    setClassesConfig([newItem, ...classesConfig]);
  }, []);

  return (
    <div className={classNames(style.wrap_items, className)}>
      {newClassesConfig.map((item, index) => (
        <button
          key={index}
          onClick={() => changeSortSheme(index)}
          className={classNames(style.button_item, selectedIndex === index && style.button_item_selected)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};
