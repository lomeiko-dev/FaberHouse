import classNames from "classnames";
import style from "./styles.module.scss";

export enum enumStyleButton {
  DEFAULT = "default_button",
  BORDER = "border_button",
  DARK = "dark_button",
  GRAY = "gray_button",
  BROWN = "brown_button",
}

interface IProps {
  className?: string;
  stylePattern?: enumStyleButton;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<IProps> = (props) => {
  const { stylePattern = enumStyleButton.DEFAULT, className, onClick, children } = props;

  return (
    <button onClick={onClick} className={classNames(style.button, style[stylePattern], className)}>
      {children}
    </button>
  );
};
