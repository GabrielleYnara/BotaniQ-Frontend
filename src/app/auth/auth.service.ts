import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginData} from "./login-data.model";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL: string = "http://localhost:9092";
  constructor(private http: HttpClient) { }

  loginUser(emailAddress: string, password: string){
    const loginData: LoginData = { emailAddress: emailAddress, password: password}
    console.log("Request to login.");
      this.http.post(this.BASE_URL + "/auth/users/login/", loginData)
        .subscribe(response => {
          console.log("Response: ");
          console.log(response);
        });
  }
}
