import { Component } from '@angular/core';
import {PlantService} from "../../../service/plant.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.css']
})
export class PlantFormComponent {
  plant: any;
  constructor(private plantService: PlantService,
              private route: ActivatedRoute) {
  }
}
