import style from "../styles.module.scss";
import { ItemClass } from "../components/item-class/ItemClass";
import { classesConfig } from "../../model/config/sort-config";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { changeClassQueryString, changeSelectIndexClass } from "features/project-sort/model";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/route-path";

export const ClassesProject = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  

  const goToProjects = (index: number) => {
    dispatch(changeClassQueryString(classesConfig[index].option))
    dispatch(changeSelectIndexClass(index))

    navigate(RoutePath.PROJECTS.path)
  }

  return (
    <section className={style.wrap}>
      {classesConfig.map((item, index) => (
        <ItemClass key={index} image={item.illustration || ''} onClick={() => goToProjects(index)} price={item.price || 0} title={item.title} />
      ))}
    </section>
  );
};
