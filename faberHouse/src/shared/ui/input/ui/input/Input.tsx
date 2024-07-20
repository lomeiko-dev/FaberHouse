import classNames from "classnames";
import style from "./styles.module.scss";
import { useEffect, useState } from "react";

interface IProps {
  className?: string;
  isError?: boolean
  placeholder?: string;
  getValue: (value: string) => void;
}

export const Input: React.FC<IProps> = (props) => {
  const { getValue, className, placeholder, isError } = props;

  const [value, setValue] = useState("");

  useEffect(() => {
    getValue(value);
  }, [value]);

  const mods = {
    [style.error_border]: isError
  }

  return (
    <input
      className={classNames(style.input, className, mods)}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};
