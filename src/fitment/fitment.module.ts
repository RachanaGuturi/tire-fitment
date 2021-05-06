import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { FitmentContainerComponent } from './fitment-container/fitment-container.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FitmentContainerComponent],
  exports: [FitmentContainerComponent]
})
export class FitmentModule { }