import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User} from '../models/user.model';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    private baseUrl = `${environment.apiUrl}`;
    user: User;
    authenticated = false;
    credentials = {username: '', password: ''};

  constructor(private http: HttpClient) {
        this.baseUrl = `${environment.apiUrl}/`;
  }

  authenticate(credentials, callback) {
    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    });
  }

  login(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/login`);
  }
}
