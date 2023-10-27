import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {GardenComponent} from "./garden.component";
import {PlantComponent} from "../plant/plant.component";
import {CareTypeComponent} from "../care-type/care-type.component";
import {GardenListComponent} from "./garden-list/garden-list.component";

const gardenRoutes: Routes = [
    {
        path: '',
        component: GardenListComponent,
    },{
        path: ':gardenId',
        component: GardenComponent,
        children: [
            {
                path: 'plant/:plantId',
                component: PlantComponent,
                children: [
                    {
                        path: 'care',
                        component: CareTypeComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(gardenRoutes)],
    exports: [RouterModule]
})
export class GardenRoutingModule { }
