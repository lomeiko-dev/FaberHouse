export interface IOffer {
  id?: number;
  name: string;
  phone: string;
  fileBase64: string;
}

export interface IOfferScheme {
  form: IOffer;
  isErrorName: boolean;
  isErrorPhone: boolean;
  isErrorFile: boolean;
  isErrors: boolean;
}
