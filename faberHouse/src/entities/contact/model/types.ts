export enum typeContact {
  MOBILE_MANAGER = "mobile_manager",
  OFFICE = "office",
}

export enum typeContactItem {
  PHONE = "phone",
  WATSAPP = "watsapp",
  PHONE_NUMBER = "phone_number",
  MODE_WORK = "mode_work",
  EMAIL = "email",
  LOCATION = "location",
}

export interface IContact {
  id?: number;
  count?: number;
  type: typeContact;
  contacts: IContactItem[];
  location?: ILocation;
}

export interface IContactItem {
  type: typeContactItem;
  data: string;
  hideData?: string;
  href?: string;
  title?: string;
}

export interface ILocation {
  longitude: number;
  latitude: number;
}
