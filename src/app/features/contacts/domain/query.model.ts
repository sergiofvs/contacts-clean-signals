import { PaginationParams } from "../../../core/types/pagination.model";

export type ContactType = 'CELULAR' | 'EMAIL' | 'WHATSAPP';

export class ContactFilters {
  constructor(
    readonly searchTerm?: string,
    readonly type?: ContactType
  ) { }
}

export class ContactsQueryParams {
  constructor(
    readonly filters: ContactFilters,
    readonly pagination: PaginationParams
  ) { }
}
