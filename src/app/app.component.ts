import {Component, OnInit} from '@angular/core';
import { User } from './models/user';
import {UserService} from "./services/user.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {SignInService} from "./services/sign-in.service";
import { SignUpComponent } from "./components/sign-up/sign-up.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit{
  users!: User[];// Marqué comme undefined
  editUser!: User;
  afficherComposant() {

  }


  emailError: string = '';
  passwordError: string = '';

  constructor(private userService: UserService, private signInService: SignInService) {}

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
  signIn(email: string, password: string): void {
    this.signInService.signIn(email, password).subscribe(
      response => {
        // Handle successful sign-in response
        console.log('Sign-in successful', response);
      },
      error => {
        // Handle sign-in error
        console.error('Sign-in failed', error);
      }
    );
  }

}
