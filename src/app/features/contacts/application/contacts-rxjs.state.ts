import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

import { ContactCollectionModel } from "../domain/contacts.model";
import { ContactsQueryParams } from "../domain/query.model";
import { ContactsState, ContactsViewModel } from "./contacts.state";

@Injectable()
export class ContactsRxjsState implements ContactsState {
  private readonly viewModelSubject = new BehaviorSubject<ContactsViewModel>({
    contacts: null,
    query: null,
    loading: false,
    error: null,
  });

  setParams(params: ContactsQueryParams) {
    this.updateViewModel({ query: params });
  }

  setContacts(collection: ContactCollectionModel) {
    this.updateViewModel({ contacts: collection });
  }

  setLoading(isLoading: boolean) {
    this.updateViewModel({ loading: isLoading });
  }

  setError(message: string | null) {
    this.updateViewModel({ error: message });
  }

  viewModel() {
    return this.viewModelSubject.asObservable();
  }

  private updateViewModel(update: Partial<ContactsViewModel>) {
    this.viewModelSubject.next({ ...this.viewModelSubject.value, ...update });
  }
}
