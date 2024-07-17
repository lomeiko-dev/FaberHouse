import style from "./styles.module.scss";
import house from "shared/assets/img/house.webp";
import HouseIcon from "shared/assets/icons/house.svg?react";
import { Info } from "../info/Info";
import {useWindowSize} from '@reactuses/core'

export const Intro = () => {

  const {width} = useWindowSize()

  return (
    <div className={style.intro}>
      <div className={style.content}>
        <div className={style.container}>
          <HouseIcon />
          <h1>Строим деревянные дома для жизни</h1>
          <h2>Уже построили 847 домов и бань по всей России</h2>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${house})` }} className={style.illustration}></div>
      {width > 500 && <Info/>}
    </div>
  );
};
