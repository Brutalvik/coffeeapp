import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { AppStateInterface } from 'src/app/Models/app.model';
import * as fromUi from './ui.reducer';

export interface AppState {
  ui: AppStateInterface;
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUi.uiReducer,
};

export const getUiState = createFeatureSelector<AppStateInterface>('ui');
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);
