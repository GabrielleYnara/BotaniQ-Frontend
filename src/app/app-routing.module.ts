import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {GardenFormComponent} from "./home/garden/garden-form/garden-form.component";
import {GardenComponent} from "./home/garden/garden.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        children:[
            { path: 'newGarden', component: GardenFormComponent },
            { path: 'garden', component: GardenComponent}
        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export  class AppRoutingModule { }
