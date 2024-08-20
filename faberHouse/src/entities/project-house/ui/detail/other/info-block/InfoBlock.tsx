import classNames from "classnames";
import style from "./styles.module.scss";
import { useState } from "react";
import { useWindowSize } from "@reactuses/core";
import { InfoNavigate } from "../../../components/info-navigate/InfoNavigate";
import { Complectation } from "../../../components/complectation/Complectation";
import { IProject } from "../../../../model/types";
import { Service } from "../../../components/service/Service";
import { FoundationList } from "../../../components/foundations/FoundationList";
import { ImageList } from "../../../components/images/ImageList";
import { Cooperation } from "../../../components/cooperation/Cooperation";
import { enumInfoNavigate } from "../../../../model/types";
import { Technologies } from "../../../components/technologies/Technologies";

interface IProps {
  className?: string;
  data: IProject;
}

export const InfoBlock: React.FC<IProps> = (props) => {
  const { className, data } = props;

  const [key, setKey] = useState<string>(enumInfoNavigate.COMPLECTATION);

  const {width} = useWindowSize()

  const getBody = (type: string) => {
    console.log(type)
    switch (type) {
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
      {width > 900 && <InfoNavigate onClick={setKey} />}
      <div className={style.body}>
        {width > 900 ? 
          getBody(key) : 
          <>
            {Object.entries(enumInfoNavigate).map(item => getBody(String(item[1])))}
          </>}
      </div>
    </div>
  );
};
