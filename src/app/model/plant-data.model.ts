import {GardenDataModel} from "./garden-data.model";

export interface PlantDataModel {
    id: number,
    name: string,
    type: string,
    garden: GardenDataModel,
    // careTypeList: Array<CareType>
}
