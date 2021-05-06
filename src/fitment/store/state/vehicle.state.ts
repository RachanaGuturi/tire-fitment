import { FitmentData } from "src/app/fitment-data";

export interface selectVehicleState {
    selectVehicle: boolean,
    selectVehicleYear:boolean,
    selectVehicleYearMake:boolean,
    selectVehicleYearMakeModel:boolean,
    fitmentDataYear: FitmentData[];
  }


export const initialState = {
    selectVehicle: false,
    selectVehicleYear:false,
    selectVehicleYearMake:false,
    selectVehicleYearMakeModel:false,
    fitmentDataYear:null
  };