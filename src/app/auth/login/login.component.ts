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

  //ToDo: javadoc
  onSubmit() {
    if (this.emailAddress && this.password) {
      this.authService.loginUser(this.emailAddress, this.password).subscribe({
        next: (response) => {
          localStorage.setItem("token", response.jwt );
          // Convert the user object to a JSON string before storing it in local storage
          localStorage.setItem("userFirstName", response.user.profile.firstName);
          this.router.navigate(['/auth/garden']);
        },
        error: (error) => {
          console.log("Login failed", error);
        }
      });
    } else {
      console.log("Please provide an email and password.");
    }
  }
}
