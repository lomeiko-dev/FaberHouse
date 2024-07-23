import classNames from "classnames";
import "./styles.scss";
import style from '../styles.module.scss'
import { Dropdown } from "primereact/dropdown";
import { sortConfig } from "../../model/config/sort-config";
import { useState } from "react";
import { ISortItem } from "features/project-sort/model/types";

interface IProps {
  className?: string;
}

export const SortDrawer: React.FC<IProps> = (props) => {
  const { className } = props;

  const [selectedSort, setSort] = useState<ISortItem>(sortConfig[0]);

  return (
    <div className={classNames(style.drawer, className)}>
      <p>Сортировать</p>
      <Dropdown
        panelClassName="dropdown-sort-drawer-panel"
        className="dropdwon-sort-drawer"
        value={selectedSort}
        onChange={(e: any) => setSort(e.value)}
        options={sortConfig}
        optionLabel="title"
      />
    </div>
  );
};
