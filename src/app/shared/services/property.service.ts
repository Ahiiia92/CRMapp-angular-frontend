import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Property} from "../models/property.model";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private baseUrl = `${environment.apiUrl}`

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/properties`
  }

  getAll(): Observable<Property[]> {
    console.log("Here are all the properties.")
    return this.http.get<Property[]>(`${this.baseUrl}`);
  }

  showProperty(id): Observable<Property> {
    return this.http.get<Property>(`${this.baseUrl}/${id}`);
  }
}
