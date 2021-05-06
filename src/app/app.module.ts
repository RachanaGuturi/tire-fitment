import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import {HttpClientModule} from '@angular/common/http';
import { FitmentModule } from "../fitment/fitment.module";

import { StoreModule, MetaReducer } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { RouterModule } from "@angular/router";
import { vehicleReducer } from "src/fitment/store/reducers/vehicle.reducer";
import { PostsEffects } from "src/fitment/store/vehicle.effects";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    FitmentModule,
    AppRoutingModule,
    StoreModule.forRoot({ selectVehicle: vehicleReducer }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([PostsEffects]),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
