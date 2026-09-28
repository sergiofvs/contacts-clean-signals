import { HttpParams } from "@angular/common/http";

import { generateUUID, isUUID } from "../../../core/types/uuid.model";
import { ContactCollectionModel, ContactSummaryModel } from "../domain/contacts.model";
import { ContactsQueryParams } from "../domain/query.model";
import { ContactsApiParamsDTO } from "./contacts-api-params.dto";
import { ContactsPaginatedDTO, ContactsSummaryDTO } from "./contacts.dto";

export class ContactsMapper {
  static mapFromDTO(dto: ContactsSummaryDTO): ContactSummaryModel {
    return new ContactSummaryModel({
      id: isUUID(dto.codigo_contato)
        ? dto.codigo_contato
        : generateUUID(),
      nome: dto.nome_contato,
      fotoURL: dto.foto_url
    });
  }

  static mapFromPaginatedDTO(dto: ContactsPaginatedDTO): ContactCollectionModel {
    const items = dto.data.map(ContactsMapper.mapFromDTO);
    return new ContactCollectionModel(
      items,
      dto.total,
      dto.current_page,
      dto.page_size
    );
  }

  static buildApiParams(params: ContactsQueryParams): HttpParams {
    const queryParams = ContactsMapper.toApiQueryParams(params);

    return new HttpParams({ fromObject: queryParams as Record<string, string> });
  }

  private static toApiQueryParams(params: ContactsQueryParams): ContactsApiParamsDTO {
    const queryParams: ContactsApiParamsDTO = {};

    if (params.filters.type) {
      queryParams.type = params.filters.type;
    }

    if (params.filters.searchTerm) {
      queryParams.search = params.filters.searchTerm;
    }

    if (params.pagination.page) {
      queryParams.page = params.pagination.page;
    }

    if (params.pagination.pageSize) {
      queryParams.pageSize = params.pagination.pageSize;
    }

    if (params.pagination.order) {
      queryParams.order = params.pagination.order;
    }

    return queryParams;
  }
}
