import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import { Contact } from '../models/contact.model';
import { Viewing } from '../models/viewing.model';

@Injectable({
  providedIn: 'root'
})
export class ViewingService {
  private baseUrl = `${environment.apiUrl}`;
  contact: Contact;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/contacts/${this.contact.id}/viewings`;
  }

  getAll(): Observable<Viewing[]> {
    return this.http.get<Viewing[]>(`${this.baseUrl}/contacts/${this.contact.id}/viewings`);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/contacts/${this.contact.id}/viewings/${id}`);
  }

    save(viewing: Viewing) {
      return this.http.post<Viewing>(`${this.baseUrl}/contacts/${this.contact.id}/viewings`, viewing);
    }

    update(id: number, newViewing: Viewing) {
      return this.http.put<Viewing>(`${this.baseUrl}/contacts/${this.contact.id}/viewings/${id}`, newViewing);
    }

    delete(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/contacts/${this.contact.id}/viewings/${id}`, { responseType: 'text'});
    }
}
