
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectVehicleState } from './state/vehicle.state';
export const POST_STATE_NAME = 'fitmentDataYear';
const getPostsState = createFeatureSelector<selectVehicleState>(POST_STATE_NAME);

export const getAllYears = createSelector(getPostsState, (state) => {
  return state.fitmentDataYear;
});