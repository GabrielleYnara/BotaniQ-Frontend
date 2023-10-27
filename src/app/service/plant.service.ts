import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {SharedResources} from "../sharedResources";
import {PlantRequestModel} from "../model/plant-request.model";
import {CareTypeRequestModel} from "../model/care-type-request.model";

@Injectable({
  providedIn: 'root'
})
export class PlantService extends SharedResources{

  constructor(private http: HttpClient) {
    super();
  }
  getSinglePlant(gardenId: string, plantId: string): Observable<any>{
    const httpHeaders = {
      headers: this.authorizedHeader()
    };
    return this.http.get(this.BASE_URL + this.getPlantByIdEndPoint(gardenId, plantId), httpHeaders)
        .pipe(
            catchError(error =>{
              console.log(`Plant retrieval failed. ${error.status}`);
              return throwError(() => error);
            })
        );
  }
  createPlant(plantRequestBody: PlantRequestModel, gardenId: string): Observable<any>{
        const httpHeaders = {
            headers: this.authorizedHeader()
        };
        return this.http.post(this.BASE_URL + this.createPlantEndPoint(gardenId), plantRequestBody, httpHeaders)
            .pipe(
                catchError(error =>{
                    console.log(`Plant creation failed. ${error.status}`);
                    return throwError(()=> error);
                }));
  }
  createPlantCareType(careTypeRequestBody: CareTypeRequestModel, gardenId: string, plantId: string){
      const httpHeaders = {
          headers: this.authorizedHeader()
      };
      return this.http.post(this.BASE_URL + this.createCareTypeEndPoint(gardenId, plantId), careTypeRequestBody, httpHeaders)
          .pipe(
              catchError(error =>{
                  console.log(`Care Type creation failed. ${error.status}`);
                  return throwError(()=> error);
              }));
  }

}
