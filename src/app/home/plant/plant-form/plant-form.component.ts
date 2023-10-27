import { Component } from '@angular/core';
import {PlantService} from "../../../service/plant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PlantRequestModel} from "../../../model/plant-request.model";

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.css']
})
export class PlantFormComponent {
  plant: any;
  name: string = "";
  type: string = "";
  constructor(private plantService: PlantService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  onSubmit(): void{
    this.route.paramMap
        .subscribe((params) => {
          let gardenId: string = params.get("gardenId") || "";
          if (this.name && this.type){
            const plant: PlantRequestModel = {name: this.name, type: this.type};
            this.plantService.createPlant(plant, gardenId)
                .subscribe({
                  next: (response) => {
                    console.log("Plant created!", response);
                    this.router.navigate(['/auth/garden/'+gardenId]);
                  },
                  error: (error) => {
                    console.log("Garden creation failed!", error);
                  }
                })
          } else {
            console.log("Fields required.")
          }
        });
  }
}
