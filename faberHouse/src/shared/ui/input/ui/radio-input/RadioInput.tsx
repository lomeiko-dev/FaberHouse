import classNames from "classnames";
import style from "./styles.module.scss";

interface IProps {
  className?: string;
  placeholder?: string;
  isChecked: boolean;
  setChange: (value: boolean) => void;
}

export const RadioInput: React.FC<IProps> = (props) => {
  const { isChecked, setChange, className, placeholder } = props;

  return (
    <div className={classNames(style.radio, className)}>
      <input
        onChange={(e) => setChange(e.target.checked)}
        type="radio"
        checked={isChecked}
      />
      <label>{placeholder}</label>
    </div>
  );
};
