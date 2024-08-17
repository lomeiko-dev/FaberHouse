import classNames from "classnames";
import { IAnotatedModel } from "../../../model";
import style from "./styles.module.scss";
import { AnotatedModel } from "shared/components/anotated-model";

interface IProps {
  className?: string;
  houseAnotated: IAnotatedModel;
  allAnotated?: IAnotatedModel[];
}

export const Technologies: React.FC<IProps> = (props) => {
  const { houseAnotated, allAnotated, className } = props;

  return (
    <div className={classNames(style.wrap, className)}>
      <AnotatedModel className={style.header} model={houseAnotated} />
      <div className={style.body}>
        {allAnotated?.map((item) => (
          <>
            <div className={style.line}></div>
            <AnotatedModel model={item} showAnotated />
          </>
        ))}
      </div>
    </div>
  );
};
