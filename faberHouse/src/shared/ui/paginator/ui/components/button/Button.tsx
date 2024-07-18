import classNames from "classnames";
import style from "./styles.module.scss";

interface IProps {
  onClick: () => void;
  children: React.ReactNode;
  isActive?: boolean
}

export const Button: React.FC<IProps> = (props) => {
  const { onClick, children, isActive } = props;

  const mods = {
    [style.button_active]: isActive
  }

  return (
    <button onClick={onClick} className={classNames(style.button, mods)}>
        {children}
    </button>
  );
};
