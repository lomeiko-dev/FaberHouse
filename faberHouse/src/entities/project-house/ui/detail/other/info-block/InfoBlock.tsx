import classNames from "classnames";
import style from "./styles.module.scss";
import { InfoNavigate } from "../../../components/info-navigate/InfoNavigate";
import { Complectation } from "entities/project-house/ui/components/complectation/Complectation";
import { IProject } from "entities/project-house/model";
import { Service } from "entities/project-house/ui/components/service/Service";
import { FoundationList } from "entities/project-house/ui/components/foundations/FoundationList";
import { ImageList } from "entities/project-house/ui/components/images/ImageList";
import { Cooperation } from "entities/project-house/ui/components/cooperation/Cooperation";
import { enumInfoNavigate } from "entities/project-house/model/types";
import { useState } from "react";
import { Technologies } from "entities/project-house/ui/components/technologies/Technologies";

interface IProps {
  className?: string;
  data: IProject;
}

export const InfoBlock: React.FC<IProps> = (props) => {
  const { className, data } = props;

  const [key, setKey] = useState<string>(enumInfoNavigate.COMPLECTATION);

  const getBody = () => {
    switch (key) {
      case enumInfoNavigate.COMPLECTATION:
        return <Complectation data={data} />;
      case enumInfoNavigate.SERVICES:
        return <Service />;
      case enumInfoNavigate.FOUNDATION:
        return <FoundationList foundations={data.foundationIllustrations} />;
      case enumInfoNavigate.MEDIA:
        return <ImageList images={data.images} />;
      case enumInfoNavigate.COOPERATION:
        return <Cooperation />;
      case enumInfoNavigate.TECHNOLOGY:
        return <Technologies houseAnotated={data.houseAnotated} allAnotated={data.allAnotated} />;
    }
  };

  return (
    <div className={classNames(style.block, className)}>
      <InfoNavigate onClick={setKey} />

      <div className={style.body}>{getBody()}</div>
    </div>
  );
};
