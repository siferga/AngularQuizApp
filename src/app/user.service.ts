import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {UserModel} from "./models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServeurUrl = '';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${this.apiServeurUrl}/user/all`);
  }
  public addUser(user: UserModel): Observable<UserModel[]> {
    return this.http.post<UserModel[]>(`${this.apiServeurUrl}/user/add`, user);
  }

  public updateUser(user: UserModel): Observable<UserModel> {
    return this.http.put<UserModel>(`${this.apiServeurUrl}/user/update`, user);
  }

  public deleteCollaborators(collaboratorId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServeurUrl}/collaborator/delete/${collaboratorId}`);
  }

}
