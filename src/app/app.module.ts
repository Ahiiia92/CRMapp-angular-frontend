import {Injectable, NgModule} from '@angular/core';
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
import { AppService } from "./shared/services/app.service";
import { HttpClientModule} from "@angular/common/http";
import { HomepageComponent } from './homepage/homepage.component';
import { ContactStartComponent } from './contacts/contact-start/contact-start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PropertyEditComponent } from './properties/property-edit/property-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SidebarModule} from "@syncfusion/ej2-angular-navigations";
import { ViewingsComponent } from './viewings/viewings.component';
import { ViewingListComponent } from './viewings/viewing-list/viewing-list.component';
import { ViewingDetailsComponent } from './viewings/viewing-details/viewing-details.component';
import { ViewingEditComponent } from './viewings/viewing-edit/viewing-edit.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    PropertyEditComponent,
    DashboardComponent,
    NavbarComponent,
    ViewingsComponent,
    ViewingListComponent,
    ViewingDetailsComponent,
    ViewingEditComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SidebarModule,
    FontAwesomeModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})


export class AppModule { }

