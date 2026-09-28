import { HttpClient, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ContactsPaginatedDTO } from "./contacts.dto";
import { ContactsApiParamsDTO } from "./contacts-api-params.dto";
import { tap } from "rxjs";

export const baseUrl = 'http://localhost:3000';

@Injectable()
export class ContactsApiService {
  private readonly http = inject(HttpClient);

  getContacts(params: HttpParams) {
    return this.http.get<ContactsPaginatedDTO>(`${baseUrl}/contacts`, { params })
      .pipe(
        tap((response) => {
          console.log('API Response:', response);
        })
      );
  }
}
