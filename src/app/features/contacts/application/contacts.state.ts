import { Injectable, Signal } from "@angular/core";
import { Observable } from "rxjs";

import { ContactCollectionModel } from "../domain/contacts.model";
import { ContactsQueryParams } from "../domain/query.model";

export interface ContactsViewModel {
  contacts: ContactCollectionModel | null;
  query: ContactsQueryParams | null;
  loading: boolean;
  error: string | null;
}

@Injectable()
export abstract class ContactsState {
  abstract viewModel(): Signal<ContactsViewModel> | Observable<ContactsViewModel>;
  abstract setParams(params: ContactsQueryParams): void;
  abstract setContacts(collection: ContactCollectionModel): void;
  abstract setLoading(isLoading: boolean): void;
  abstract setError(message: string | null): void;

  constructor() {}
}
