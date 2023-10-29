import { Injectable } from '@angular/core';
import {SharedResources} from "../sharedResources";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {CareTrackRequestModel} from "../model/care-track-request.model";

@Injectable({
  providedIn: 'root'
})
export class CaretypeService extends SharedResources{

  constructor(private http: HttpClient) {
    super();
  }
  getAllCareNeeds(gardenId: string, plantId: string): Observable<any> {
    const httpHeaders = {
      headers: this.authorizedHeader()
    };
    return this.http.get(this.BASE_URL + this.getAllCareTypesByPlantIdEndPoint(gardenId, plantId), httpHeaders)
        .pipe(
            catchError(error =>{
              console.log(`Get all care types failed. ${error.status}`);
              return throwError(() => error);
            })
        );
  }
  registerCareTrack(gardenId: string, plantId: string, careId: string, careTrack: CareTrackRequestModel): Observable<any>{
      const httpHeaders = {
          headers: this.authorizedHeader()
      };
      return this.http.post(this.BASE_URL + this.registerCareTrackEndPoint(gardenId, plantId, careId), careTrack, httpHeaders)
          .pipe(
              catchError(error =>{
                  console.log(`Register care track failed. ${error.status}`);
                  return throwError(() => error);
              })
          );
    }

}
