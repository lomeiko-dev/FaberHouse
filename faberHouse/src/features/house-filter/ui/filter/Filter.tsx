import { GenerateForm } from "../../model/lib/GenerateForm";
import style from "../styles.module.scss";
import { filterFormConfig } from "../../model/config/filter-form.config";
import classNames from "classnames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useState } from "react";
import { changeFilterString } from "features/house-filter/model";

interface IProps {
  className?: string;
}

export const Filter: React.FC<IProps> = (props) => {
  const { className } = props;

  const [fields, setFields] = useState<any>({});
  const dispatch = useAppDispatch();

  const generateQueryStringHandler = () => {
    let query = "";
    for (let key in fields) {
      query += `${fields[key]}&`;
    }

    const result = query.replace(new RegExp(",", "g"), "&").slice(0, -1);
    dispatch(changeFilterString(result));
  };

  return (
    <div className={classNames(style.filter, className)}>
      <GenerateForm getFields={setFields} config={filterFormConfig} />
      <button onClick={generateQueryStringHandler}>Показать проекты</button>
    </div>
  );
};
