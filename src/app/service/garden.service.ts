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
      const gardenRequestBody: GardenRequestModel = {description: description, notes: notes};
      const httpHeaders = {
        headers: this.authorizedHeader()
      };
      return this.http.post(this.BASE_URL + this.gardensEndPoint, gardenRequestBody, httpHeaders)
          .pipe(
            catchError(error =>{
              console.log(`Garden creation failed. ${error.status}`);
              return throwError(()=> error);
            }));
  }

  getSingleGarden(gardenId: number): Observable<any>{
      const httpHeaders = {
          headers: this.authorizedHeader()
      };
      return this.http.get(this.BASE_URL + "/gardens/" + gardenId + "/", httpHeaders)
          .pipe(
              catchError(error =>{
                  console.log(`Garden retrieval failed. ${error.status}`);
                  return throwError(() => error);
              })
          );
  }
}
