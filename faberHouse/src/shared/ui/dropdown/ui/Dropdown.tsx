import classNames from "classnames";
import "./style.css";
import { DropdownProps, Dropdown as PrimeDropdown } from "primereact/dropdown";

interface IProps extends DropdownProps {
  className?: string;
}

export const Dropdown: React.FC<IProps> = (props) => {
  const { className, ...otherProps } = props;
  return (
    <PrimeDropdown
        panelClassName="custom-dropdown-panel"
        className={classNames('custom-dropdown', className)}
        {...otherProps}
    />
  );
};
