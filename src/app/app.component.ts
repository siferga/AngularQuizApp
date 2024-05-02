import {Component, OnInit} from '@angular/core';
import { User } from './models/user';
import {UserService} from "./services/user.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  users!: User[];// Marqué comme undefined

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers()
  }

  public getUsers():void {
    this.userService.getUsers().subscribe(
      (response:User[]) => {
        this.users = response;
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    )
 }
}
