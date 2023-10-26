import { Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {ActivatedRoute, Router} from "@angular/router";

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

  loginUser(emailAddress: string, password: string){
    console.log("email: " + emailAddress + " and password collected.");
    this.authService.loginUser(emailAddress,password);

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
