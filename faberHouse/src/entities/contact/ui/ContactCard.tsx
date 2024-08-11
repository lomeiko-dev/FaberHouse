import style from "./styles.module.scss";
import classNames from "classnames";
import { contactConfig } from "../model/config/contact-config";
import { ContactItem } from "./components/item/ContactItem";
import { IContact } from "../model/types";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

interface IProps extends IContact {
  className?: string;
}

export const ContactCard: React.FC<IProps> = (props) => {
  const { type, className, contacts, location, count } = props;

  const contact = contactConfig[type];

  return (
    <div className={style.contact_wrap}>
      <div className={classNames(style.contact, className)}>
        <div className={style.header}>
          <h3>
            {contact.title} {count && `№${count}`}
          </h3>
          {contact.icon}
        </div>
        <div className={style.list}>
          {contacts.map((contact) => (
            <ContactItem {...contact} />
          ))}
        </div>
      </div>
      {location && (
        <div className={style.map_wrap}>
          <YMaps>
            <Map className={style.map} defaultState={{ center: [location.longitude, location?.latitude], zoom: 17 }}>
              <Placemark geometry={[location.longitude, location?.latitude]} />
            </Map>
          </YMaps>
        </div>
      )}
    </div>
  );
};
