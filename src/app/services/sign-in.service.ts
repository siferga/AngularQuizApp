import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  private signInUrl = 'http://localhost:4200/sign-in';

  constructor(private http: HttpClient) {}

  signIn(email: string, password: string): Observable<any> {
    // Make an HTTP POST request to the sign-in API with email and password
    return this.http.post(this.signInUrl, { email, password });
  }
}
