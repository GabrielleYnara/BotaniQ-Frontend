import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {GardenComponent} from "./garden.component";
import {PlantComponent} from "../plant/plant.component";
import {AppComponent} from "../../app.component";

const gardenRoutes: Routes = [
    {
        path: '',
        component: AppComponent, //ToDo replace it by garden list once implemented
    },{
    // {
        path: ':gardenId',
        component: GardenComponent,
        children: [
            {
                path: 'plant/:plantId',
                component: PlantComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(gardenRoutes)],
    exports: [RouterModule]
})
export class GardenRoutingModule { }