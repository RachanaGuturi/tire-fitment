import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { FitmentData } from "src/app/fitment-data";
import { FitmentService } from "src/app/fitment.service";
import { Store } from '@ngrx/store';
import { getMake, getModel, getTrim, getYears, getYearsdata } from "../store/actions/vehicle.action";
import { selectVehicleState } from "../store/state/vehicle.state";
import { getAllYears } from "../store/vehicle.selector";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit {
  years$: Observable<any>;
  fitmentDataYear:FitmentData []=[];
  fitmentDataMake:FitmentData []=[];
  fitmentDataModel:FitmentData []=[];
  fitmentDataTrim:FitmentData []=[];
  selectVehicle$:Observable<any>;
  selectVehicleYear$:Observable<any>;
  selectVehicleYearMake$:Observable<any>;
  selectVehicleYearMakeModel$:Observable<any>

  constructor(private fitmentService:FitmentService,private store: Store<{ selectVehicle: selectVehicleState }>) {}

  ngOnInit() {}

  getYears() {
    this.store.dispatch(getYears());
    this.selectVehicle$ = this.store.select('selectVehicle');
   this.fitmentService.getAllYears().subscribe(
    (response: FitmentData[]) => {
       this.fitmentDataYear = response;
      }
    );
    //this.fitmentDataYear = this.store.select(getAllYears);
    //this.store.dispatch(getYearsdata());
  }

  getMake(){
    this.store.dispatch(getMake());
    this.selectVehicleYear$ = this.store.select('selectVehicle');
    this.fitmentService.getAllMakewithYears().subscribe(
      (response: FitmentData[]) => {
        this.fitmentDataMake = response;
       }
     );
  }

  getModel(){
    this.store.dispatch(getModel());
    this.selectVehicleYearMake$ = this.store.select('selectVehicle');
    this.fitmentService.getAllMakewithYearsModel().subscribe(
      (response: FitmentData[]) => {
        this.fitmentDataModel = response;
       }
     );
  }

  getTrim(){
    this.store.dispatch(getTrim());
    this.selectVehicleYearMakeModel$ = this.store.select('selectVehicle');
    this.fitmentService.getAllMakewithYearsModelTrim().subscribe(
      (response: FitmentData[]) => {
        this.fitmentDataTrim = response;
       }
     );
  }

  

  


}
