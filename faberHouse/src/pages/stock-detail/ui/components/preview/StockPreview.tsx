import { IStock } from "entities/stock";
import style from "./styles.module.scss";
import React from "react";
import { Container } from "shared/ui/container";
import classNames from "classnames";
import { AddressCard } from "shared/components/address-card";
import { ListItem } from "shared/ui/list-item";

interface IProps extends Omit<IStock, "title"> {
    className?: string
}

export const StockPreview: React.FC<IProps> = (props) => {
  const { description, descriptionPreview, orderList, preview, className } = props;

  return (
    <div className={classNames(style.preview, className)}>
      <Container>
        <div className={style.preview_inner}>
          <img src={preview} alt="preview stock" />
          <div className={style.content}>
            <h4>{descriptionPreview}</h4>
            <p className={style.descr}>{description}</p>
            {orderList.length > 0 && (
              <div className={style.order}>
                <p className={style.title}>Акция действуте при заказе:</p>
                {orderList.map((item) => <ListItem title={item}/>)}
              </div>
            )}
            <p className={style.message}>Уточняйте подробности акции у наших менеджеров</p>
            <AddressCard className={style.address}/>
          </div>
        </div>
      </Container>
    </div>
  );
};
