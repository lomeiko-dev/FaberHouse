import { classesConfig } from "features/project-sort/model/config/sort-config";
import style from "../styles.module.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { ISortItem } from "features/project-sort/model/types";

export const ClassesProjectItems = () => {
  const [selectedIndex, setSelected] = useState(0);
  const [newClassesConfig, setClassesConfig] = useState(classesConfig);

  const changeSortSheme = (index: number) => {
    setSelected(index);
  };

  useEffect(() => {
    const newItem: ISortItem = { title: "Все проекты", value: "" };
    setClassesConfig([newItem, ...classesConfig]);
  });

  return (
    <div className={style.wrap_items}>
      {newClassesConfig.map((item, index) => (
        <button
          onClick={() => changeSortSheme(index)}
          className={classNames(style.button_item, selectedIndex === index && style.button_item_selected)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};
