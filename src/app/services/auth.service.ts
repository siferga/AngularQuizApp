import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:4200'; //  URL de l'API

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-in`, { email, password });
  }

  signUp(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/sign-up`, userData);
  }

  signOut(): Observable<any> {
    // Assuming you have an endpoint for signing out (e.g., clearing the JWT token)
    return this.http.post(`${this.apiUrl}/sign-out`, {});
  }
}
