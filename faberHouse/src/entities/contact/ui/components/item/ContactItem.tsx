import { useState } from "react";
import style from "./styles.module.scss";
import classNames from "classnames";
import { IContactItem } from "../../../model/types";
import { contactItemConifg } from "../../../model/config/contact-config";

interface IProps extends IContactItem {
  className?: string;
}

export const ContactItem: React.FC<IProps> = (props) => {
  const { data, className, hideData, title, href, type } = props;

  const [visible, setVisible] = useState(false);

  return (
    <div className={classNames(style.item, className)}>
      {contactItemConifg[type]}
      <div className={style.data}>
        {href === undefined ? <p>{data}</p> : <a href={href}>{data}</a>}
        {hideData && !visible && <button onClick={() => setVisible(true)}>Показать</button>}
        {visible && <p>{hideData}</p>}
        {title && <p>, {title}</p>}
      </div>
    </div>
  );
};
