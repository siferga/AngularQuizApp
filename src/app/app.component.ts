import {Component, OnInit} from '@angular/core';
import { User } from './models/user';
import {UserService} from "./services/user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  users!: User[];// Marqué comme undefined
  editUser!: User;


  emailError: string = '';
  passwordError: string = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  public getUsers():void {
    this.userService.getUsers().subscribe(
      (response:User[]) => {
        this.users = response;
        console.log(this.users);
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    )
 }

  public onOpenModal(user: User, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUserModal');
    }

   /* container.appendChild(button);
    button.click();
    container.remove(button);*/

  }

}
