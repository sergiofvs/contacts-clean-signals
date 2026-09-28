import { Component } from '@angular/core';
import { ContactsComponent } from './features/contacts/ui/pages/contacts/contacts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ContactsComponent],
})
export class AppComponent {
  title = 'contacts-clean-signals';
}
