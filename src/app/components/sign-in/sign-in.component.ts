import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signInForm = {
    email: '',
    password: ''};

  constructor(private authService: AuthService) {

  }

  onSubmit(): void {
    this.authService.signIn(this.signInForm.email, this.signInForm.password).subscribe(
      response => {
        console.log('Sign-up successful', response);
      },
      error => {
        console.error('Sign-up', error);
      }
    );
  }
}
