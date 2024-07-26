import { MultiSelectProps, MultiSelect as PrimeMultiSelect } from "primereact/multiselect";
import "./style.css";
import classNames from "classnames";
import { useEffect, useState } from "react";

interface IProps extends MultiSelectProps {
  className?: string;
  value: any[],
  onChange: (e: any) => void
}

export const MultiSelect: React.FC<IProps> = (props) => {
  const { className, value, onChange, ...otherProps } = props;

  const [thisValue, setValue] = useState(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

  const changeHandler = (e: any) => {
    setValue(e.value);
    onChange(e);
  };

  return (
    <PrimeMultiSelect
      panelClassName="custom-multiselect-panel"
      className={classNames("custom-multiselect", className)}
      onChange={changeHandler}
      value={thisValue}
      {...otherProps}
    />
  );
};
