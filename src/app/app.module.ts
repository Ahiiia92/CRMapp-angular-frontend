import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { HeaderComponent } from './header/header.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { PropertyItemComponent } from './properties/property-list/property-item/property-item.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { PropertiesComponent } from './properties/properties.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactItemComponent } from './contacts/contact-list/contact-item/contact-item.component';
import {ContactService} from "./shared/services/contact.service";
import {HttpClientModule} from "@angular/common/http";
import { HomepageComponent } from './homepage/homepage.component';
import { ContactStartComponent } from './contacts/contact-start/contact-start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PropertyEditComponent } from './properties/property-edit/property-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactListComponent,
    HeaderComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    PropertyItemComponent,
    ContactEditComponent,
    PropertiesComponent,
    ContactsComponent,
    ContactItemComponent,
    HomepageComponent,
    ContactStartComponent,
    PageNotFoundComponent,
    PropertyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
