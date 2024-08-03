import { ContactCard, useGetAllContactsQuery } from "entities/contact";
import style from "./styles.module.scss";

export const ContactList = () => {
  const { data } = useGetAllContactsQuery();

  return (
    <div className={style.list}>
      {data?.map((contact) => (
        <ContactCard {...contact} />
      ))}
    </div>
  );
};
