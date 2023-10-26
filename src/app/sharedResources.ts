import {HttpHeaders} from "@angular/common/http";

export class SharedResources {
    protected BASE_URL: string = "http://localhost:9092";
    protected gardensEndPoint: string = "/gardens/";

    protected authorizedHeader(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        });
    }

    protected getPlantByIdEndPoint(gardenId: string, plantId: string): string{
        return `/gardens/${gardenId}/plants/${plantId}/`
    }
}
