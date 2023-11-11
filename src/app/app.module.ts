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
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { GardenComponent } from './home/garden/garden.component';
import { GardenFormComponent } from './home/garden/garden-form/garden-form.component';
import { PlantComponent } from './home/plant/plant.component';
import { GardenRoutingModule } from "./home/garden/garden-routing.module";
import { PlantFormComponent } from './home/plant/plant-form/plant-form.component';
import { CareTypeComponent } from './home/care-type/care-type.component';
import { CareTypeFormComponent } from './home/care-type/care-type-form/care-type-form.component';
import { GardenListComponent } from './home/garden/garden-list/garden-list.component';
import { CareTrackerComponent } from './home/care-tracker/care-tracker.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { GreetingsComponent } from './home/greetings/greetings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GardenComponent,
    GardenFormComponent,
    PlantComponent,
    PlantFormComponent,
    CareTypeComponent,
    CareTypeFormComponent,
    GardenListComponent,
    CareTrackerComponent,
    NavigationComponent,
    GreetingsComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        GardenRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
