import { ContactCard, Skeleton, useGetAllContactsQuery } from "entities/contact";
import style from "./styles.module.scss";
import { Error } from "shared/ui/error";

export const ContactList = () => {
  const { data, isError, isLoading } = useGetAllContactsQuery();

  if(isLoading){
    return(
      <div className={style.list}>
        {Array(3).fill('').map(() => <Skeleton/>)}
      </div>
    )
  }

  if(isError){
    return(
      <div className={style.list}>
        <Error message="Ошибка сервера"/>
      </div>
    )
  }

  return (
    <div className={style.list}>
      {data?.map((contact) => (
        <ContactCard {...contact} />
      ))}
    </div>
  );
};
