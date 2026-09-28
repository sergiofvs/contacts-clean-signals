import { Component, inject } from '@angular/core';
import { PaginationParams } from '../../../../../core/types/pagination.model';
import { ContactsFacade } from '../../../application/contacts.facade';
import { ContactFilters, ContactsQueryParams } from '../../../domain/query.model';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {
  private readonly facade = inject(ContactsFacade);

  protected readonly viewModel = this.facade.viewModel();

  ngOnInit() {
    const query = new ContactsQueryParams(
      new ContactFilters('John Doe', 'EMAIL'),
      new PaginationParams(1, 10, 'asc'),
    );

    this.facade.loadContacts(query);
  }
}
