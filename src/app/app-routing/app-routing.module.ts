import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  
  
  //{ path: "selectVehicle", component: SelectVehicleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash:true  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
