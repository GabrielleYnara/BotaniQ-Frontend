import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./auth/login/login.component";
import {GardenFormComponent} from "./home/garden/garden-form/garden-form.component";
import {PlantFormComponent} from "./home/plant/plant-form/plant-form.component";
import {CareTypeFormComponent} from "./home/care-type/care-type-form/care-type-form.component";
import {CareTrackerComponent} from "./home/care-tracker/care-tracker.component";

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
            },{
                path: 'newPlant/:gardenId',
                component: PlantFormComponent
            },{
                path: 'newCareType/:plantId',
                component: CareTypeFormComponent
            },{
                path: 'garden/:gardenId/plant/:plantId/careTracker',
                component: CareTrackerComponent
            }

        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export  class AppRoutingModule { }
