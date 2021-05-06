import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient } from "@angular/common/http";
import { FitmentData } from './fitment-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FitmentService {

  constructor(private httpClient : HttpClient) { }
   
  getAllYears() : Observable<FitmentData[]>
  {
    return this.httpClient.get<FitmentData[]>("https://6080be3273292b0017cdbf2a.mockapi.io/years");
  }

  getAllMakewithYears() : Observable<FitmentData[]>
  {
    return this.httpClient.get<FitmentData[]>("https://6080be3273292b0017cdbf2a.mockapi.io/makes");
  }

  getAllMakewithYearsModel() : Observable<FitmentData[]>
  {
    return this.httpClient.get<FitmentData[]>("https://6080be3273292b0017cdbf2a.mockapi.io/models");
  }
  
  getAllMakewithYearsModelTrim() : Observable<FitmentData[]>
  {
    return this.httpClient.get<FitmentData[]>("https://6080be3273292b0017cdbf2a.mockapi.io/trim");
  }
}
