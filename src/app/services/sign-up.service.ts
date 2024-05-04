import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private signUpUrl = 'http://localhost:4200/sign-up';

  constructor(private http: HttpClient) {}

  signUp(userData: any): Observable<any> {
    // HTTP POST request to the sign-up API with user data
    return this.http.post(this.signUpUrl, userData);
  }
}
