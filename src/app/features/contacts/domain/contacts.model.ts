import { UUID } from "../../../core/types/uuid.model";

export interface ContactSummary {
  id: UUID;
  nome: string;
  fotoURL: string;
}

export class ContactSummaryModel {
  readonly id: UUID;
  readonly nome: string;
  readonly fotoURL: string;

  constructor(readonly data: ContactSummary) {
    this.id = data.id;
    this.nome = data.nome;
    this.fotoURL = data.fotoURL;
  }
}

export class ContactCollectionModel {
  constructor(
    readonly items: ContactSummaryModel[],
    readonly total: number,
    readonly currentPage: number,
    readonly pageSize: number
  ) { }

  hasNextPage(): boolean {
    return this.currentPage * this.pageSize < this.total;
  }
}
