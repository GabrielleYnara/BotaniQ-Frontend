import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {SharedResources} from "../sharedResources";

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

}
