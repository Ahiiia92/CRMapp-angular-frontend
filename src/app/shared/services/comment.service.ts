import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact.model';
import { Viewing } from '../models/viewing.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = `${environment.apiUrl}`;
  viewing: Viewing;
  contact: Contact;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/contacts/${this.contact.id}/viewings/${this.viewing.id}/comments`;
  }

  getAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.apiUrl}/contacts/${this.contact.id}/viewings/${this.viewing.id}/comments`);
  }

  show(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}/contacts/${this.contact.id}/viewings/${this.viewing.id}/comments/${id}`);
  }

  save(comment: Comment) {
    return this.http.post<Comment[]>(`${environment.apiUrl}/contacts/${this.contact.id}/viewings/${this.viewing.id}/comments`, comment);
  }

  update(id: number, newComment: Comment) {
    return this.http.put<Comment>(`${environment.apiUrl}/contacts/${this.contact.id}/viewings/${this.viewing.id}/comments/${id}`, newComment);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/contacts/${this.contact.id}/viewings/${this.viewing.id}/comments/${id}`, { responseType: 'text' });
  }
}
