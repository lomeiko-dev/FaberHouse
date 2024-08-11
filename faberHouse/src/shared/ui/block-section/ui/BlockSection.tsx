import classNames from "classnames";
import style from "./styles.module.scss";
import { Container } from "shared/ui/container";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

export const BlockSection: React.FC<IProps> = (props) => {
  const { className, children } = props;

  return (
    <div className={classNames(style.section, className)}>
      <Container>{children}</Container>
    </div>
  );
};
