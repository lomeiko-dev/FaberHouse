import { typeContact, typeContactItem } from "../types";
import { IContactConfig } from "./types";
import ManagerIcon from "shared/assets/icons/manager.svg?react";
import OfficeIcon from "shared/assets/icons/office.svg?react";

import PhoneIcon from "shared/assets/icons/mobile.svg?react";
import WatsappIcon from "shared/assets/icons/watsapp.svg?react";
import CallIcon from "shared/assets/icons/call2.svg?react";
import MessageIcon from "shared/assets/icons/message.svg?react";
import TimeIcon from "shared/assets/icons/time.svg?react";
import CheckMark from 'shared/assets/icons/checkmark.svg?react'

export const contactConfig: Record<typeContact, IContactConfig> = {
  [typeContact.MOBILE_MANAGER]: {
    title: "Мобильный менеджер",
    icon: <ManagerIcon />,
  },
  [typeContact.OFFICE]: {
    title: "Офис",
    icon: <OfficeIcon />,
  },
};

export const contactItemConifg: Record<typeContactItem, any> = {
  [typeContactItem.PHONE]: <PhoneIcon/>,
  [typeContactItem.EMAIL]: <MessageIcon/>,
  [typeContactItem.MODE_WORK]: <TimeIcon/>,
  [typeContactItem.PHONE_NUMBER]: <CallIcon/>,
  [typeContactItem.WATSAPP]: <WatsappIcon/>,
  [typeContactItem.LOCATION]: <CheckMark/>,
}
