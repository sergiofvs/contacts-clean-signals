import { inject, Injectable, Signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";

import { catchError, finalize, map } from "rxjs/operators";

import { isObservable, of } from "rxjs";
import { ContactCollectionModel } from "../domain/contacts.model";
import { ContactsQueryParams } from "../domain/query.model";
import { ContactsApiService } from "../infrastructure/contacts-api.service";
import { ContactsMapper } from "../infrastructure/contacts.mapper";
import { ContactsState, ContactsViewModel } from "./contacts.state";

@Injectable()
export class ContactsFacade {
  private readonly api = inject(ContactsApiService);
  private readonly state = inject(ContactsState);
  private readonly viewModelSignal: Signal<ContactsViewModel> = (() => {
    const viewModel = this.state.viewModel();

    return isObservable(viewModel)
      ? toSignal(viewModel, {
          initialValue: {
            contacts: null,
            query: null,
            loading: false,
            error: null,
          },
        })
      : viewModel;
  })();

  loadContacts(query: ContactsQueryParams) {
    this.state.setLoading(true);
    this.state.setError(null);
    this.state.setParams(query);

    const apiParams = ContactsMapper.buildApiParams(query);

    this.api.getContacts(apiParams)
      .pipe(
        map((dto) => ContactsMapper.mapFromPaginatedDTO(dto)),
        finalize(() => this.state.setLoading(false)),
        catchError((error) => {
          this.state.setError(error.message || 'An error occurred while loading contacts.');
          return of(null);
        })
      )
      .subscribe((collection: ContactCollectionModel | null) => {
        if (collection) {
          this.state.setContacts(collection);
        }
      }
      );
  }

  viewModel() {
    return this.viewModelSignal;
  }
}
