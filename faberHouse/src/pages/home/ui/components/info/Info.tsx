import style from "./styles.module.scss";
import { CompanyStats } from "shared/components/company-stats";

export const Info: React.FC = () => {
  return (
    <div className={style.info}>
      <div className={style.info_inner}>
        <div className={style.indicator}></div>
        <CompanyStats/>
      </div>
    </div>
  );
};
