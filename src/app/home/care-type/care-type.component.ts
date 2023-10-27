import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CaretypeService} from "../../service/caretype.service";

@Component({
  selector: 'app-care-type',
  templateUrl: './care-type.component.html',
  styleUrls: ['./care-type.component.css']
})
export class CareTypeComponent implements OnInit{
  careType: any;
  careTypeList: any;
  constructor(private careTypeService: CaretypeService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap
        .subscribe( (params) => {
          let plantId: string = params.get("plantId") || "";
          // Get the parent route's paramMap
          let gardenId: string = this.route.parent?.snapshot.paramMap.get("gardenId") || "";
          // localStorage.setItem("gardenId", gardenId);
            console.log("here");
            console.log("plantId" + plantId + "gardenId" + gardenId)
          this.careTypeService.getAllCareNeeds(gardenId, plantId)
              .subscribe({
                next: (response) => {
                  console.log(response.message);
                  console.log(response.data);
                  this.careType = response.data;
                },
                error: (error) => {
                  console.log("Care Type not found", error);
                }
              })
        })
  }
}
