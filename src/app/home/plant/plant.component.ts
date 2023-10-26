import { Component, OnInit} from '@angular/core';
import {PlantService} from "../../service/plant.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit{
  plant: any;

  constructor(private plantService: PlantService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap
        .subscribe( (params) => {
          let plantInd: string = params.get("plantId") || "";
          // Get the parent route's paramMap
          let gardenId: string = this.route.parent?.snapshot.paramMap.get("gardenId") || "";
          this.plantService.getSinglePlant(gardenId,plantInd)
              .subscribe({
                  next: (response) => {
                      console.log(response.message);
                      console.log(response.data);
                      this.plant = response.data;
                  },
                  error: (error) => {
                      console.log("Plant not found", error);
                  }
              })
        })
  }

}
