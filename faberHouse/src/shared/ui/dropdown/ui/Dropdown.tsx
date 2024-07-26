import classNames from "classnames";
import "./style.css";
import { DropdownProps, Dropdown as PrimeDropdown } from "primereact/dropdown";
import { useEffect, useState } from "react";

interface IProps extends DropdownProps {
  className?: string;
  value: any,
  onChange: (e: any) => void
}

export const Dropdown: React.FC<IProps> = (props) => {
  const { className, value, onChange, ...otherProps } = props;

  const [thisValue, setValue] = useState(value)

  useEffect(() => {
    setValue(value)
  }, [value])

  const changeHandler = (e: any) => {
    setValue(e.value)
    onChange(e)
  }

  return (
    <PrimeDropdown
        panelClassName="custom-dropdown-panel"
        className={classNames('custom-dropdown', className)}
        onChange={changeHandler}
        value={thisValue}
        {...otherProps}
    />
  );
};
