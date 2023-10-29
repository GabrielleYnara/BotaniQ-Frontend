import {Component, OnInit} from '@angular/core';
import {PlantService} from "../../service/plant.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-care-tracker',
  templateUrl: './care-tracker.component.html',
  styleUrls: ['./care-tracker.component.css']
})
export class CareTrackerComponent implements OnInit{
  plant: any = localStorage.getItem("plantName");
  trackers: any;
  constructor(private plantService: PlantService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap
        .subscribe( (params) => {
          let plantId:string = params.get("plantId") || "";
          let gardenId:string = params.get("gardenId") || "";
          this.plantService.getPlantCareTracker(gardenId, plantId)
              .subscribe({
                next: (response) => {
                  this.trackers = response.data;
                  //plant has array careTypeList
                  //each item has an array careTrackList
                  //each item
                  console.log(this.trackers); // This will log the array of careTracks
                },
                error: (error) => {
                  console.log("Plant not found", error);
                }
              })
        });
  }

}
