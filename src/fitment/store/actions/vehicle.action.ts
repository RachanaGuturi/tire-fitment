import { Action,createAction,props } from '@ngrx/store';
import { FitmentData } from 'src/app/fitment-data';
// import model/interface from db.json here...

// Action constants
export const getYears = createAction('getYears');
export const getMake = createAction('getMake');
export const getModel = createAction('getModel');
export const getTrim = createAction('getTrim');
export const GET_YEARSDATA = '[years page] load years';
export const GET_YEARS_SUCCESS = '[years page] load years success';

export const getYearsdata = createAction(GET_YEARSDATA);
export const getYearsSuccess = createAction(
  GET_YEARS_SUCCESS,
  props<{ fitmentyearData: FitmentData[] }>()
);




