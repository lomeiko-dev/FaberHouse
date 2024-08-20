import classNames from "classnames";
import style from "./styles.module.scss";
import { RadioInput } from "shared/ui/input";
import { useEffect, useState } from "react";
import { formConfig } from "../model/config/form-config";
import { IOptMaterial, IAccessories } from "../model/types";
import { Dropdown } from "shared/ui/dropdown";
import { Button } from "shared/ui/button";

interface IProps {
  className?: string;
}

export const BuildForm: React.FC<IProps> = (props) => {
  const { className } = props;

  const [price, setPrice] = useState(0)
  const [accessories, setAccessories] = useState<IAccessories[]>([]);

  const AddNewAccessories = (props: IAccessories, name: string) => {
    setAccessories(prev => {
        let newPrev: IAccessories[] = prev
        
        if(prev.find(item => item.forName === name)){
            newPrev = prev.filter(item => item.forName !== name)
        }

        return [...newPrev, props]
    })
  }

  useEffect(() => {
    setPrice(0)
    accessories.forEach(item => setPrice(prev => prev += item.price))
  }, [accessories])

  const generateUI = (props: IOptMaterial) => {
    switch (props.typeOutput) {
      case "dropdown":
        return (
          <>
            <p>{props.title}</p>
            <Dropdown value={null} onChange={(e) => AddNewAccessories(e.value, props.name)} options={props.accessories} optionLabel="title" />
          </>
        );
      case "radios":
        return (
          <>
            <p>{props.title}</p>
            {props.accessories.map((item) => (
              <RadioInput isChecked={accessories.find(acc => acc.title === item.title) !== undefined} setChange={() => AddNewAccessories(item, props.name)} placeholder={item.title} />
            ))}
          </>
        );
    }
  };

  return (
    <div className={classNames(style.form, className)}>
      <p>Выберите материал строительства</p>
      {formConfig.map((item) => generateUI(item))}
      <p>Стоимость</p>
      <div className={style.footer}>
        <div className={style.price}>{price} ₽</div>
        <Button>Обсудить детали</Button>
      </div>
    </div>
  );
};
