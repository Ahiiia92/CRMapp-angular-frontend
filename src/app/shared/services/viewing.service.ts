import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ViewingService {
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/contacts/${contactId}/viewings`;
  }

  getAll(): Observable<Viewing[]> {
    return this.http.get<Viewing[]>(`${this.baseUrl}/contacts/${contactId}/viewings`);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/contacts/${contactId}/viewings/${id}`);
  }

    save(contact: Viewing) {
      return this.http.post<Viewing>(`${this.baseUrl}/contacts/${contactId}/viewings`, viewing);
    }

    update(id: number, newViewing: Viewing) {
      return this.http.put<Viewing>(`${this.baseUrl}/contacts/${contactId}/viewings/${id}`, newViewing);
    }

    delete(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/contacts/${contactId}/viewings/${id}`, { responseType: 'text'});
    }
}
