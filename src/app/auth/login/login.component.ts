import { Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailAddress: string = "";
  password: string = "";

  constructor(private authService: AuthService) {
  }

  loginUser(emailAddress: string, password: string){
    console.log("email: " + emailAddress + " and password collected.");
    this.authService.loginUser(emailAddress,password);
  }

  ngOnInit(): void{ }
}
