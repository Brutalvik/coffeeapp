import { createAction, props } from '@ngrx/store';
import { CoffeeDataInterface } from 'src/app/Models/app.model';

export const LOADING = '[UI] Start Loading';
export const LOAD_DATA = '[DATA] Load Data';
export const GET_DATA_SUCCESS = '[DATA] Get Data success';
export const GET_ERROR_DATA = '[DATA] Get Error Data';

export const isLoaded = createAction(LOADING, props<{ status: boolean }>());
export const fetchData = createAction(LOAD_DATA);
export const getSuccessData = createAction(
  GET_DATA_SUCCESS,
  props<{ data: CoffeeDataInterface }>()
);
