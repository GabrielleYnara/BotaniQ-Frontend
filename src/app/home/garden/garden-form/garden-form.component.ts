import { Component } from '@angular/core';

@Component({
  selector: 'app-garden-form',
  templateUrl: './garden-form.component.html',
  styleUrls: ['./garden-form.component.css']
})
export class GardenFormComponent {
  description: string = "";
  notes: string = "";

  onSubmit() {
    if ( this.description && this.description ){
      console.log(this.description + " and " + this.notes);
    }
  }
}
