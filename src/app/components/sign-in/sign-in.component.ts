import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
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
        console.log('Connexion successful', response);
      },
      error => {
        console.error('Connexion failed', error);
      }
    );
  }
}
