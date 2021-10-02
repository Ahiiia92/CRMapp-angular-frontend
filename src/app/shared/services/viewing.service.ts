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
    console.log(this.contact);
    console.log(Contact);
    console.log()
    this.baseUrl = `${environment.apiUrl}/contacts/${this.contact}`;
  }

  getAll(): Observable<Viewing[]> {
    return this.http.get<Viewing[]>(`${this.baseUrl}/viewings`);
  }

// Not in the Backend YET
  show(viewingId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/viewings/${viewingId}`);
  }

    save(viewing: Viewing) {
      return this.http.post<Viewing>(`${this.baseUrl}/viewings`, viewing);
    }

// Not in the Backend YET
    update(viewingId: number, newViewing: Viewing) {
      return this.http.put<Viewing>(`${this.baseUrl}/viewings/${viewingId}`, newViewing);
    }

// Not in the Backend YET
    delete(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/contacts/${this.contact}/viewings/${id}`, { responseType: 'text'});
    }
}
