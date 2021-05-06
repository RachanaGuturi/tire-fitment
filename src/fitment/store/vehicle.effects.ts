import { map, mergeMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { getYearsdata, getYearsSuccess } from './actions/vehicle.action';
import { FitmentService } from 'src/app/fitment.service';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private fitmentService: FitmentService) {}

  getYearsData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getYearsdata),
      mergeMap((action) => {
        return this.fitmentService.getAllYears().pipe(
          map((fitmentyearData) => {
            return getYearsSuccess({ fitmentyearData });
          })
        );
      })
    );
  });
}