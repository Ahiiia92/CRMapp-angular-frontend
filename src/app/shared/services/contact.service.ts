import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../contact.model";

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ContactService {
  private contactsUrl: string;

  constructor(private http: HttpClient) {
    this.contactsUrl = 'http://localhost:8088/api/v1/contacts';
  }

  public getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUrl);
  }

  public save(contact: Contact) {
    this.http.post<Contact>(this.contactsUrl, contact);
  }
}
