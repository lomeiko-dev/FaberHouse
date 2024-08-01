import React from "react";
import style from "./styles.module.scss";
import classNames from "classnames";

interface IProps {
  className?: string;
  isError?: boolean;
  placeholder?: string;
  getValue: (value: string) => void;
  value?: string
}

export const Textarea: React.FC<IProps> = (props) => {
  const { getValue, className, isError, placeholder, value } = props;

  const mods = {
    [style.error_border]: isError,
  };

  return (
    <textarea
      className={classNames(style.input, className, mods)}
      placeholder={placeholder}
      value={value}
      onChange={(e: any) => getValue(e.target.value)}
    />
  );
};
