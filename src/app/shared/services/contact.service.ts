import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../models/contact.model";
import {environment} from "../../../environments/environment";

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class ContactService {
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/contacts`;
  }

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.baseUrl}`);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  save(contact: Contact) {
    return this.http.post<Contact>(`${this.baseUrl}`, contact);
  }

  update(id: number, contact: Contact) {
    return this.http.put<Contact>(`${this.baseUrl}/${id}`, contact);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text'});
  }
}
