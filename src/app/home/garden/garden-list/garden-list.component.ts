import {Component, OnInit} from '@angular/core';
import {GardenService} from "../../../service/garden.service";

@Component({
  selector: 'app-garden-list',
  templateUrl: './garden-list.component.html',
  styleUrls: ['./garden-list.component.css']
})
export class GardenListComponent implements OnInit {
  gardenList: any;
  userName: string | null = localStorage.getItem("userFirstName");

  constructor(private gardenService: GardenService) {
  }

  ngOnInit(): void {
      this.userName = localStorage.getItem("userFirstName");
      if (this.userName === "null"){
          this.userName = "";
      }
    this.gardenService.getAllGardens()
        .subscribe({
          next: (response) => {
            this.gardenList = response.data;
          },
          error: (error) => {
            console.log("Garden list not found", error);
          }
        });
  }
}
