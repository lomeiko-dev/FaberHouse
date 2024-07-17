import style from "./styles.module.scss";
import { ItemClass } from "./components/item-class/ItemClass";
import tree from "shared/assets/img/tree.webp";
import timber from "shared/assets/img/timber.webp";
import skeleton from "shared/assets/img/skeleton.webp";
import bathhouse from "shared/assets/img/bathhouse.webp";

export const ClassesProject = () => {
  return (
    <section className={style.wrap}>
      <ItemClass image={tree} title="Дома из бруса" price={450000} onClick={() => null} />
      <ItemClass image={timber} title="Дома из бревна" price={950000} onClick={() => null} />
      <ItemClass image={skeleton} title="Каркасные дома" price={1450000} onClick={() => null} />
      <ItemClass image={bathhouse} title="Бани из дерева" price={271000} onClick={() => null} />
    </section>
  );
};
