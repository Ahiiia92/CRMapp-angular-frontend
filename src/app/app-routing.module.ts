import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import {HomepageComponent} from "./homepage/homepage.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {ContactStartComponent} from "./contacts/contact-start/contact-start.component";
import {ContactEditComponent} from "./contacts/contact-edit/contact-edit.component";
import {ContactDetailsComponent} from "./contacts/contact-details/contact-details.component";
import {PropertiesComponent} from "./properties/properties.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PropertyDetailComponent} from "./properties/property-detail/property-detail.component";
import {PropertyEditComponent} from "./properties/property-edit/property-edit.component";
import { ViewingsComponent } from './viewings/viewings.component';
import { ViewingDetailsComponent } from './viewings/viewing-details/viewing-details.component';
import { Viewing } from './shared/models/viewing.model';
import { ViewingEditComponent } from './viewings/viewing-edit/viewing-edit.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contacts', component: ContactsComponent, children: [
      { path: '', component: ContactStartComponent },
      { path: 'new', component: ContactEditComponent },
      { path: ':id', component: ContactDetailsComponent },
      { path: ':id/edit', component: ContactEditComponent}
    ] },
  { path: 'properties', component: PropertiesComponent, children: [
      { path: '', component: PropertiesComponent },
      { path: 'new', component: PropertyEditComponent },
      { path: ':id', component: PropertyDetailComponent },
      { path: ':id/edit', component: PropertyEditComponent }
    ] },
  { path: 'viewings', component: ViewingsComponent, children: [
      { path: '', component: ViewingsComponent },
      { path: 'new', component: ViewingEditComponent },
      { path: ':id', component: ViewingDetailsComponent },
      { path: ':id/edit', component: ViewingEditComponent }
  ] },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
