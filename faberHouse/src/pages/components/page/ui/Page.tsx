import classNames from "classnames";
import style from "./styles.module.scss";
import { SectionViewer } from "./components/section-viewer/SectionViewer";
import { Container } from "shared/ui/container";
import { Guarantees } from "widgets/guarantees";
import { About } from "widgets/about";
import { BlockSection } from "shared/ui/block-section";

interface IProps {
  className?: string;
  name: string;
  sections?: string[];
  children: React.ReactNode;
  isDefaultComponents?: boolean;
}

export const Page: React.FC<IProps> = (props) => {
  const { name, sections, className, children, isDefaultComponents } = props;

  return (
    <div className={classNames(style.page, className)}>
      <Container>
        <div className={style.header}>
          <SectionViewer sections={sections} />
          <h2>{name}</h2>
        </div>
      </Container>
      {children}
      {isDefaultComponents && (
        <>
          <BlockSection>
            <Guarantees />
          </BlockSection>
          <BlockSection>
            <About />
          </BlockSection>
        </>
      )}
    </div>
  );
};
