import classNames from "classnames";
import style from "./styles.module.scss";
import { IProject } from "../../model";
import { ImageSlider } from "shared/ui/image-slider";
import { Stats } from "../components/stats/Stats";
import { ServiceList } from "../components/service-list/ServiceList";
import { InfoBlock } from "./other/info-block/InfoBlock";

interface IProps {
  data: IProject;
  className?: string;
  slotForm?: React.ReactNode;
}

export const ProjectDetail: React.FC<IProps> = (props) => {
  const { className, data, slotForm } = props;

  return (
    <div className={classNames(style.detail, className)}>
      <div className={style.header}>
        <div className={style.left_part}>
          <ImageSlider className={style.slider} images={data.images} />
          <div className={style.services}>
            <h3>В стоимость включено</h3>
            <ServiceList className={style.list} ids={data.services} />
          </div>
        </div>
        <div className={style.right_part}>
          <Stats className={style.stats} title="Информация о проекте" project={data} />
          {slotForm}
        </div>
      </div>
      <div className={style.body}>
        <InfoBlock data={data} className={style.info} />
      </div>
    </div>
  );
};
