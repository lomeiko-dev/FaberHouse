import classNames from "classnames";
import style from "./styles.module.scss";
import { CooperationList } from "entities/project-house/model/data/cooperation";
import { NumberCard } from "shared/components/number-card";
import { ListItem } from "shared/ui/list-item";

interface IProps {
  className?: string;
}

export const Cooperation: React.FC<IProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(style.cooperation, className)}>
      {CooperationList.map((cooperation, index) => (
        <NumberCard className={style.card} count={index + 1}>
          <h2>{cooperation.title}</h2>
          <div className={style.body}>
            {cooperation.description && <p>{cooperation.description}</p>}
            {cooperation.list && cooperation.list?.map((item) => <ListItem title={item} />)}
          </div>
        </NumberCard>
      ))}
    </div>
  );
};
