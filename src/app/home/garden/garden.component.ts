import { Component, OnInit } from '@angular/core';
import {GardenService} from "../../service/garden.service";

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit{
  garden: any;
  constructor(private gardenService: GardenService) {
  }

  ngOnInit(): void {
    this.gardenService.getSingleGarden(1)
        .subscribe({
          next: (response) => {
            this.garden = response.data;
          },
          error: (error) => {
            console.log("Garden not found", error);
          }
        })
  }

}
