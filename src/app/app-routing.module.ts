import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {GardenFormComponent} from "./home/garden/garden-form/garden-form.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'auth',
        component: HomeComponent,
        children:[
            {
                path: 'newGarden',
                component: GardenFormComponent
            },
            {
                path: 'garden',
                loadChildren: () => import('./home/garden/garden-routing.module').then(module => module.GardenRoutingModule)
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export  class AppRoutingModule { }
