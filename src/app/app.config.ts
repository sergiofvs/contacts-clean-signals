import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';

import { ContactsFacade } from './features/contacts/application/contacts.facade';
import { ContactsApiService } from './features/contacts/infrastructure/contacts-api.service';
import { ContactsSignalsState } from './features/contacts/application/contacts-signals.state';
import { ContactsState } from './features/contacts/application/contacts.state';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    ContactsFacade,
    ContactsApiService,
    {
      provide: ContactsState,
      useClass: ContactsSignalsState,
    },
  ]
};
