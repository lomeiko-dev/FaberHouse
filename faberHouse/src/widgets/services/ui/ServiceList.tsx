import classNames from "classnames";
import style from "./styles.module.scss";
import { ServiceCard, Skeleton, useGetAllServicesQuery } from "entities/service";
import { Error } from "shared/ui/error";

interface IProps {
  className?: string;
}

export const ServiceList: React.FC<IProps> = (props) => {
  const { className } = props;

  const { data, isLoading, isError } = useGetAllServicesQuery();

  if(isLoading){
    return(
      <div className={style.list}>
        {Array(6).fill('').map(() => <Skeleton/>)}
      </div>
    )
  }

  if(isError){
    return(
      <Error message="Ошибка сервера."/>
    )
  }

  return (
    <div className={classNames(style.list, className)}>
      {data?.map((service, index) => (
        <ServiceCard index={index + 1} {...service} />
      ))}
    </div>
  );
};
