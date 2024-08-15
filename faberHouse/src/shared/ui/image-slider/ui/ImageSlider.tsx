import { useState } from "react";
import style from "./styles.module.scss";
import classNames from "classnames";
import ArrowRight from "shared/assets/icons/arrow-right.svg?react";

interface IProps {
  images: string[];
  className?: string;
}

export const ImageSlider: React.FC<IProps> = (props) => {
  const { images, className } = props;

  const [selectIndex, setSelectIndex] = useState(0);

  const incrementIndexHandler = () => {
    if (selectIndex === images.length - 1) {
      setSelectIndex(0);
      return;
    }

    setSelectIndex(selectIndex + 1);
  };

  const decrimentIndexHandler = () => {
    if (selectIndex === 0) {
      setSelectIndex(images.length - 1);
      return;
    }

    setSelectIndex(selectIndex - 1);
  };

  return (
    <div className={classNames(style.slider, className)}>
      <div className={style.display}>
        <div style={{ backgroundImage: `url(${images[selectIndex]})` }} className={style.img}></div>
        <div className={style.managment}>
          <button onClick={decrimentIndexHandler}>
            <ArrowRight />
          </button>
          <button onClick={incrementIndexHandler}>
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className={style.other}>
        {images.map((item, index) => (
          <div onClick={() => setSelectIndex(index)} className={style.img_wrap}>
            <img src={item} alt="image" />
            {selectIndex === index && <div className={style.select}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};
