import { Component, OnInit} from '@angular/core';
import {PlantService} from "../../service/plant.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CaretypeService} from "../../service/caretype.service";
import {CareTrackRequestModel} from "../../model/care-track-request.model";

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit{
  plant: any;
  date: any;
  done: any;
  careTrack: any;
  plantId: string = "";
  gardenId: string = "";

  constructor(private plantService: PlantService,
              private route: ActivatedRoute,
              private router: Router,
              private careTypeService: CaretypeService) {
  }

  ngOnInit(): void {
    this.route.paramMap
        .subscribe( (params) => {
          this.plantId = params.get("plantId") || "";
          // Get the parent route's paramMap
          //   let gardenId: string = this.route.parent?.snapshot.paramMap.get("gardenId") || "";
          this.gardenId = this.route.parent?.snapshot.paramMap.get("gardenId") || "";
          localStorage.setItem("gardenId", this.gardenId);
          this.plantService.getSinglePlant(this.gardenId, this.plantId)
              .subscribe({
                  next: (response) => {
                      this.plant = response.data;
                      localStorage.setItem("plantName", this.plant.name);
                      console.log(response.data);
                      this.router.navigate(['/auth/garden/'+ this.gardenId + '/plant/' + this.plantId + '/care']);
                  },
                  error: (error) => {
                      console.log("Plant not found", error);
                  }
              })
        });
  }

  public registerCareMinistered(careTypeId: string){
      this.route.paramMap
          .subscribe( (params) => {
              let plantId: string = params.get("plantId") || "";
              // Get the parent route's paramMap
              //   let gardenId: string = this.route.parent?.snapshot.paramMap.get("gardenId") || "";
              let gardenId: string = this.route.parent?.snapshot.paramMap.get("gardenId") || "";
              this.done = true;
              this.date = this.date.year + "-" + this.date.month + "-" + this.date.day;
              let careTrack: CareTrackRequestModel = {done: this.done, date: this.date};
              this.careTypeService.registerCareTrack(gardenId,plantId,careTypeId,careTrack)
                  .subscribe({
                      next: (response) => {
                          this.careTrack = response.data;
                          this.router.navigate(['/auth/garden/'+ gardenId + '/plant/' + plantId + '/care']);
                      },
                      error: (error) => {
                          console.log("Plant not found", error);
                      }
                  })
          });
      this.done = false;
  }

}
