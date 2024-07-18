import { guaranteeConfig } from "../model/config/guarantee-config";
import { BlockTesting } from "./components/block-testing/BlockTesting";
import { ItemGuarantee } from "./components/item-guarantee/ItemGuarantee";
import style from "./styles.module.scss";
import CheckIcon from "shared/assets/icons/check.svg?react";

export const Guarantees = () => {
  return (
    <div className={style.wrap}>
      <div className={style.guarantees}>
        <CheckIcon />
        <h1>Гарантии нашей компании</h1>
        <div className={style.list}>
          {guaranteeConfig.map((item, index) => (
            <ItemGuarantee key={index} guarantee={item} />
          ))}
        </div>
      </div>
      <div className={style.block}>
        <BlockTesting />
      </div>
    </div>
  );
};
