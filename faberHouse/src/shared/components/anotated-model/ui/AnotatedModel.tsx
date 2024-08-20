import { IAnotatedModel } from "entities/project-house";
import style from "./styles.module.scss";
import classNames from "classnames";
import { Point } from "shared/ui/point";
import { AnotatedItem } from "./components/anotated-item/AnotatedItem";
import { useState } from "react";

interface IProps {
  className?: string;
  model: IAnotatedModel;
  showAnotated?: boolean;
}

export const AnotatedModel: React.FC<IProps> = (props) => {
  const { model, showAnotated, className } = props;

  const [selectIndex, setSelect] = useState(0);

  return (
    <div className={classNames(style.wrap, className)}>
      <div className={style.model}>
        <div style={{ backgroundImage: `url(${model.modelImage})` }} className={style.image}>
          {model.anotateds.map((item, index) => (
            <Point
              isActive={index === selectIndex}
              onClick={() => setSelect(index)}
              point={item.coord}
              title={showAnotated ? String(index + 1) : item.title || ""}
            />
          ))}
        </div>
      </div>
      {showAnotated && (
        <div className={style.anotated}>
          <h2>{model.title}</h2>
          <div className={style.list}>
            {model.anotateds.map((item, index) => (
              <AnotatedItem
                onClick={() => setSelect(index)}
                isActive={index === selectIndex}
                index={index + 1}
                title={item.title || ""}
                description={item.description || ""}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
