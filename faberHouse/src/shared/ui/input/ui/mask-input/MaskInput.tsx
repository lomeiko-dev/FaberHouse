import { useEffect, useState } from "react";
import style from "./styles.module.scss";
import { InputMask } from "primereact/inputmask";
import classNames from "classnames";

interface IProps {
  className?: string;
  mask: string;
  placeholder?: string;
  getValue: (value: string) => void
}

export const MaskInput: React.FC<IProps> = (props) => {
  const { mask, className, placeholder, getValue } = props;

  const [value, setValue] = useState("");

  useEffect(() => {
    getValue(value)
  }, [value])

  return (
    <InputMask
      className={classNames(style.input, className)}
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
      mask={mask}
      placeholder={placeholder}
    />
  );
};
