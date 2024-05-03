import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  standalone: true,
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
        console.log('Registration successful', response);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }

}
