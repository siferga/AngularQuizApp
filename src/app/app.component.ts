import {Component, OnInit} from '@angular/core';
import { UserModel } from './models/user.model';
import {UserService} from "./user.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public users!: UserModel[];// Marqué comme undefined

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers()
  }

  public getUsers():void {
    this.userService.getUsers().subscribe(
      (response:UserModel[]) => {
        this.users = response;
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    )
 }
}
