// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions. 
// Return new state
import { getMake, getModel, getTrim, getYears, getYearsSuccess } from '../actions/vehicle.action';
import { initialState } from '../state/vehicle.state';
import { createReducer, on } from '@ngrx/store';

const _vehicleReducer = createReducer(
  initialState,
  on(getYears, (state) => {
    return {
      ...state,
      selectVehicle: true,
    };
  }),
  on(getMake, (state) => {
    return {
      ...state,
      selectVehicleYear: true,
    };
  }),
  on(getModel, (state) => {
    return {
      ...state,
      selectVehicleYearMake: true,
    };
  }),
  on(getTrim, (state) => {
    return {
      ...state,
      selectVehicleYearMakeModel: true,
    };
  }),
  on(getYearsSuccess, (state, action) => {
    return {
      ...state,
      posts: action.fitmentyearData,
    };
  })
);

export function vehicleReducer(state, action) {
  return _vehicleReducer(state, action);
}