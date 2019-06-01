export interface QueryBuilder {
  toQueryMap: () => Map<string, string>;
  toQueryString: () => string;
}
