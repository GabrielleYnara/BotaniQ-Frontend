import { Injectable } from '@angular/core';
import {SharedResources} from "../sharedResources";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

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
    return this.http.get(this.BASE_URL + this.getAllCareTypesByPlantId(gardenId, plantId), httpHeaders)
        .pipe(
            catchError(error =>{
              console.log(`Get all care types failed. ${error.status}`);
              return throwError(() => error);
            })
        );
  }
}
