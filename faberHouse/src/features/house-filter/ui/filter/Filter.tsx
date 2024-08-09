import { GenerateForm } from "../../model/lib/GenerateForm";
import style from "../styles.module.scss";
import { filterFormConfig } from "../../model/config/filter-form.config";
import classNames from "classnames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useState } from "react";
import { changeFilterString } from "features/house-filter/model";
import { Button, enumStyleButton } from "shared/ui/button";

interface IProps {
  className?: string;
  isMobile?: boolean;
  onClickShow?: () => void
}

export const Filter: React.FC<IProps> = (props) => {
  const { className, isMobile, onClickShow } = props;

  const [fields, setFields] = useState<any>({});
  const dispatch = useAppDispatch();

  const generateQueryStringHandler = () => {
    let query = "";
    for (let key in fields) {
      query += `${fields[key]}&`;
    }

    const result = query.replace(new RegExp(",", "g"), "&").slice(0, -1);
    dispatch(changeFilterString(result));
    onClickShow?.();
  };

  return (
    <div style={isMobile ? { height: "400px" } : { height: "90px" }} className={classNames(style.filter, className)}>
      <div className={classNames(style.filter_inner, isMobile ? style.mobile : style.desktop)}>
        <GenerateForm getFields={setFields} config={filterFormConfig} />
        <Button className={style.btn} stylePattern={enumStyleButton.BORDER} onClick={generateQueryStringHandler}>Показать проекты</Button>
      </div>
    </div>
  );
};
