export interface ContactsApiParamsDTO {
  type?: string;
  search?: string;
  page?: number;
  pageSize?: number;
  order?: 'asc' | 'desc';
}
