import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContactsListComponent } from './components/contacts/contacts-list.component';
import { ContactFormComponent } from './components/contacts/contact-form.component';
import { ContactBulkComponent } from './components/contacts/contact-bulk.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactsListComponent, canActivate: [AuthGuard] },
  { path: 'contacts/create', component: ContactFormComponent, canActivate: [AuthGuard] },
  { path: 'contacts/bulk', component: ContactBulkComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
