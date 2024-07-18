import { useEffect, useState } from "react";
import { Button } from "./components/button/Button";
import style from "./styles.module.scss";
import ArrowIcon from "shared/assets/icons/arrow-right-2.svg?react";
import classNames from "classnames";

interface IProps {
  pageCount: number;
  defaultActivePage: number;
  setPage: (page: number) => void;
  className?: string;
}

export const Paginator: React.FC<IProps> = (props) => {
  const { pageCount, defaultActivePage, setPage, className } = props;

  const [activePage, setActivePage] = useState(defaultActivePage);

  const [array, setArray] = useState<number[]>([]);

  const changeInterval = () => {
    setArray(() => {
      let newArray = [];
      let start = activePage;
      let end = activePage + 3;

      if (activePage >= 2) start = activePage - 1;

      if (activePage + 3 > pageCount) end = pageCount + 1;

      for (let i = start; i < end; i++) {
        newArray.push(i);
      }

      return newArray;
    });
  };

  const incrementPage = () => {
    if (activePage < pageCount) setActivePage((prev) => prev + 1);
  };

  const dicrementPage = () => {
    if (activePage != 1) setActivePage((prev) => prev - 1);
  };

  useEffect(() => {
    changeInterval();
    setPage(activePage);
  }, [activePage]);

  return (
    <div className={classNames(style.paginator, className)}>
      <Button onClick={dicrementPage}>
        <ArrowIcon className={style.left_icon} />
        <p>Назад</p>
      </Button>
      <div className={style.nums}>
        {array.map((item, index) => (
          <Button key={index} isActive={item === activePage} onClick={() => setActivePage(item)}>
            <p>{item}</p>
          </Button>
        ))}
        {pageCount > 3 && (
          <>
            {pageCount > 4 && (
              <Button onClick={() => setActivePage(Math.round(pageCount / 2))}>
                <p>...</p>
              </Button>
            )}
            <Button onClick={() => setActivePage(pageCount)}>
              <p>{pageCount}</p>
            </Button>
          </>
        )}
      </div>
      <Button onClick={incrementPage}>
        <p>Вперед</p>
        <ArrowIcon className={style.right_icon} />
      </Button>
    </div>
  );
};
