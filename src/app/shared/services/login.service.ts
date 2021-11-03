import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private baseUrl = `${environment.apiUrl}`;
    user: User;

  constructor(private http: HttpClient) {
        this.baseUrl = `${environment.apiUrl}/`;
  }

  login(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/login`);
  }
}
