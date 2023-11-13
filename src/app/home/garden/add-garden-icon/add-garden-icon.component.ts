import { Component } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-add-garden-icon',
  standalone: true,
  imports: [NgbTooltipModule, RouterLink],
  templateUrl: './add-garden-icon.component.html',
  styleUrls: ['./add-garden-icon.component.css']
})
export class AddGardenIconComponent {

}
