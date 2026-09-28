export interface ContactDTO {
  codigo_contato: string;
  nome_contato: string;
  opcoes_contato: ContactOptionDTO[];
}

export interface ContactOptionDTO {
  id: string;
  tipo: 'CELULAR' | 'EMAIL' | 'WHATSAPP';
  valor: string;
  ativo: boolean;
}
