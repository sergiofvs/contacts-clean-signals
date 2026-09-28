import { Injectable, signal } from "@angular/core";

import { ContactCollectionModel } from "../domain/contacts.model";
import { ContactsQueryParams } from "../domain/query.model";
import { ContactsState, ContactsViewModel } from "./contacts.state";

@Injectable()
export class ContactsSignalsState implements ContactsState {
  private readonly viewModelSignal = signal<ContactsViewModel>({
    contacts: null,
    query: null,
    loading: false,
    error: null,
  });

  viewModel() {
    return this.viewModelSignal.asReadonly();
  }

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

  private updateViewModel(update: Partial<ContactsViewModel>) {
    this.viewModelSignal.update((current) => ({ ...current, ...update }));
  }
}
