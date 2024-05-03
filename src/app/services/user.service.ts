import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {User} from "../models/user";

@Injectable({providedIn: 'root'
})
export class UserService {
  private apiServeurUrl = '';
  private signUpUrl = '/api/signup'; // Remplacez '/api/signup' par l'URL de votre endpoint de signup

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServeurUrl}/user/all`);
  }
  public addUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(`${this.apiServeurUrl}/user/add`, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiServeurUrl}/user/update`, user);
  }

  public deleteCollaborators(collaboratorId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeurUrl}/collaborator/delete/${collaboratorId}`);
  }

  signUp(user: User): Observable<any> {
    return this.http.post<any>(this.signUpUrl, user);
  }

}



