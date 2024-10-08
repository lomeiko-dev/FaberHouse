import classNames from "classnames";
import style from "./styles.module.scss";

interface IProps {
  className?: string;
  isError?: boolean;
  placeholder?: string;
  getValue: (value: string) => void;
  value?: string;
}

export const Input: React.FC<IProps> = (props) => {
  const { getValue, className, placeholder, isError, value } = props;

  const mods = {
    [style.error_border]: isError,
  };

  return (
    <input
      className={classNames(style.input, className, mods)}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e: any) => getValue(e.target.value)}
    />
  );
};
