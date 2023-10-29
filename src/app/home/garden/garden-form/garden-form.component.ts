import { Component } from '@angular/core';
import {GardenService} from "../../../service/garden.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-garden-form',
  templateUrl: './garden-form.component.html',
  styleUrls: ['./garden-form.component.css']
})
export class GardenFormComponent {
  description: string = "";
  notes: string = "";

  constructor(private gardenService: GardenService,
              private router: Router) {
  }
  onSubmit() {
    if ( this.description ){
      this.gardenService.createGarden(this.description, this.notes)
          .subscribe({
              next: (response) => {
                console.log("Garden created!", response);
                this.router.navigate(['/auth/garden/'+response.data.id]);
              },
              error: (error) => {
                console.log("Garden creation failed!", error);
              }
          })
    } else {
      console.log("Description ")
    }
  }
}
