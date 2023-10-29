import { Component, OnInit } from '@angular/core';
import {GardenService} from "../../service/garden.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit{
  garden: any;
  constructor(private gardenService: GardenService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.route.paramMap
          .subscribe((params) => {
              let gardenId: string = params.get("gardenId") || "";
              this.gardenService.getSingleGarden(gardenId)
                  .subscribe({
                      next: (response) => {
                          this.garden = response.data;
                      },
                      error: (error) => {
                          console.log("Garden not found", error);
                      }
                  })
          });
  }
}
