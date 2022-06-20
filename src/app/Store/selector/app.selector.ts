import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/Models/app.model';
import { getIsLoading } from '../reducers/app.reducer';

export interface AppState {
  ui: AppStateInterface;
}

export const getUiState = createFeatureSelector<AppStateInterface>('ui');
export const getLoading = createSelector(getUiState, getIsLoading);
