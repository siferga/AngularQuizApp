import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpForm = {
    first_name: '',
    last_name: '',
    user_name: '',
    email: '',
    password: ''};

  constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.signUp(this.signUpForm).subscribe(
      response => {
        console.log('Sign-up successful', response);
      },
      error => {
        console.error('Sign-up failed', error);
      }
    );
  }

}
