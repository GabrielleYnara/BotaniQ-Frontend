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
        return `/gardens/${gardenId}/plants/${plantId}/`;
    }

    protected createPlantEndPoint(gardenId: string): string{
        return `/gardens/${gardenId}/plants/`;
    }

    protected createCareTypeEndPoint(gardenId: string, plantId: string): string{
        return `/gardens/${gardenId}/plants/${plantId}/cares/`;
    }

    protected getAllCareTypesByPlantIdEndPoint(gardenId: string, plantId: string): string{
        return `/gardens/${gardenId}/plants/${plantId}/cares/`;
    }
    protected registerCareTrackEndPoint(gardenId: string, plantId: string, careId: string): string{
        return `/gardens/${gardenId}/plants/${plantId}/cares/${careId}/care-tracker/`;
    }
}
