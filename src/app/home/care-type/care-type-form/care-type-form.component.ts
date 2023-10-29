import { Component } from '@angular/core';
import {PlantService} from "../../../service/plant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CareTypeRequestModel} from "../../../model/care-type-request.model";

@Component({
  selector: 'app-care-type-form',
  templateUrl: './care-type-form.component.html',
  styleUrls: ['./care-type-form.component.css']
})
export class CareTypeFormComponent {
  type: string = "";
  frequency: string = "";
  constructor(private plantService: PlantService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  onSubmit():void{
    this.route.paramMap
        .subscribe((params) => {
          let plantId: string = params.get("plantId") || "";
          let gardenId: string | null = localStorage.getItem("gardenId");
          if (!gardenId){
            gardenId = "";
          }
          if (this.type && this.frequency){
            const careType: CareTypeRequestModel = {type: this.type, frequency: this.frequency};
            this.plantService.createPlantCareType(careType, gardenId, plantId)
                .subscribe({
                  next: (response) => {
                    console.log("Care Type created!", response);
                    this.router.navigate(['/auth/garden/'+ gardenId + '/plant/' + plantId]);
                  },
                  error: (error) => {
                    console.log("Care Type creation failed!", error);
                  }
                })
          } else {
            console.log("Fields required.")
          }
        });
  }
}
