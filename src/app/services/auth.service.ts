import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://your-api-url.com'; // Remplacez par URL de l'API

  constructor(private http: HttpClient) { }
  signIn(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  signUp(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
