import classNames from "classnames";
import style from "./styles.module.scss";
import { useEffect, useState } from "react";

interface IProps {
  className?: string;
  placeholder?: string;
  getValue: (value: string) => void;
}

export const Input: React.FC<IProps> = (props) => {
  const { getValue, className, placeholder } = props;

  const [value, setValue] = useState("");

  useEffect(() => {
    getValue(value);
  }, [value]);

  return (
    <input
      className={classNames(style.input, className)}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};
