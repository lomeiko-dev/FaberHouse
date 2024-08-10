import { ClassesProjectItems, sortSelection } from "features/project-sort";
import style from "../styles.module.scss";
import { useAppSelector } from "shared/lib/hooks/useAppSelector";
import { Filter } from "features/house-filter";

interface IProps {
  isMobile?: boolean;
  onCloseModal?: () => void;
  className?: string
}

export const SortFilterCompact: React.FC<IProps> = (props) => {
  const { isMobile, onCloseModal, className } = props;

  const storeSort = useAppSelector(sortSelection);

  return (
    <div className={className}>
      <ClassesProjectItems onClick={onCloseModal} defaultSelectIndex={storeSort.selectIndexClass + 1} />
      <div className={style.filter_wrap}>
        <Filter onClickShow={onCloseModal} isMobile={isMobile} className={style.filter} />
      </div>
    </div>
  );
};
