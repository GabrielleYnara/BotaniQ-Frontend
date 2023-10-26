import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {GardenRequestModel} from "../model/garden-request.model";
import {SharedResources} from "../sharedResources";

@Injectable({
  providedIn: 'root'
})
export class GardenService extends SharedResources{

  constructor(private http: HttpClient) {
    super();
  }
    createGarden(description: string, notes: string): Observable<any>{
      const gardenRequest: GardenRequestModel = {description: description, notes: notes};
      const httpHeaders = {
        headers: this.authorizedHeader()
      };
      return this.http.post(this.BASE_URL + this.gardensEndPoint, gardenRequest, httpHeaders)
          .pipe(
            catchError(error =>{
              console.log(`Garden creation failed. ${error.status}`);
              return throwError(()=> error);
            }));
  }
}
