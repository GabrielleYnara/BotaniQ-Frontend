/**
 * Fixed NullInjectorError issue by following instructions from
 * <a href="https://techoverflow.net/2023/01/23/how-to-fix-angular-nullinjectorerror-no-provider-for-httpclient/">
 *     How to fix Angular NullInjectorError: No provider for HttpClient!
 * </a>
 */
import { HttpClientModule} from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
