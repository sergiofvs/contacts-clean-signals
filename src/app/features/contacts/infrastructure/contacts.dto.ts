export interface ContactsSummaryDTO {
  codigo_contato: string;
  nome_contato: string;
  foto_url: string;
}

export interface ContactsPaginatedDTO {
  data: ContactsSummaryDTO[];
  total: number;
  current_page: number;
  page_size: number;
}
