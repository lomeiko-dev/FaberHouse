import style from "./styles.module.scss";
import { Dropdown } from "shared/ui/dropdown";
import { IFilterConfig } from "../types";
import { MultiSelect } from "shared/ui/multiSelect";
import { useState } from "react";

interface IProps {
  config: IFilterConfig[];
  getFields?: (fields: any) => void;
}

export const GenerateForm: React.FC<IProps> = (props) => {
  const { config, getFields } = props;

  const [fileds, setFields] = useState<any>({});

  const changeFields = (key: string, value: string) => {
    setFields((prev: any) => {
      const newState = prev;
      newState[key] = value;
      return prev;
    });

    getFields?.(fileds);
  };

  const getComonentByType = (type: "dropdown" | "multiSelect", props: any, key: string) => {
    switch (type) {
      case "dropdown":
        return (
          <Dropdown key={key} className={style.input} onChange={(e) => changeFields(key, e.value.option)} {...props} />
        );
      case "multiSelect":
        return (
          <MultiSelect key={key} className={style.input} onChange={(e) => changeFields(key, e.value)} {...props} />
        );
    }
  };

  return <>{config.map((item) => getComonentByType(item.typeUI, item, item.nameKey))}</>;
};
