import { Component } from '@angular/core';
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";

/**
 * Additional material: <br>
 * <a href="https://angular.io/guide/router-tutorial-toh">Routing and Navigation documentation</a>
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailAddress: string = "";
  password: string = "";

  constructor(private authService: AuthService,
              private router: Router) {
  }

  onSubmit() {
    if (this.emailAddress && this.password) {
      this.authService.loginUser(this.emailAddress, this.password).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log('Login failed', error);
        }
      });
    } else {
      console.log('Email and password are required');
    }
  }
}
