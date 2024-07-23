import style from "../styles.module.scss";
import { ItemClass } from "../components/item-class/ItemClass";
import { classesConfig } from "../../model/config/sort-config";

export const ClassesProject = () => {
  return (
    <section className={style.wrap}>
      {classesConfig.map((item) => (
        <ItemClass image={item.illustration || ''} onClick={() => null} price={item.price || 0} title={item.title} />
      ))}
    </section>
  );
};
