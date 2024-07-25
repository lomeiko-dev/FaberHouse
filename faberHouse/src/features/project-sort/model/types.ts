export interface ISortItem {
  title: string;
  option: string;
  illustration?: string;
  price?: number;
}

export interface ISortScheme {
  classQueryString: string;
  sortQueryString: string;
  queryString: string;
  selectIndexClass: number;
}
