import { Routes } from '@angular/router';
import { TicketListComponent } from './components/ticket-list/ticket-list';

export const routes: Routes = [
  { path: '', component: TicketListComponent }, 
  { path: 'tickets', component: TicketListComponent }
];