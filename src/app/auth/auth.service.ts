import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginData} from "../model/login-data.model";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BASE_URL: string = "http://localhost:9092";
  constructor(private http: HttpClient) { }

  loginUser(emailAddress: string, password: string): Observable<any> {
    const loginData: LoginData = { emailAddress: emailAddress, password: password}
    return this.http.post(this.BASE_URL + "/auth/users/login/", loginData)
        .pipe(
            catchError(error => {
              console.log(`Login failed: ${error.status}`);
              return throwError(() => error);
            }));
  }
}
