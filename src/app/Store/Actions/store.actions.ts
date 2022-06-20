import { createAction, props } from '@ngrx/store';
import { LoadState } from 'src/app/Models/app.model';

//load data from API
export const ON_LOADING = '[products page] loading';
export const ON_NOT_LOADING = '[products page] not loading';
export const LOAD_API_DATA = '[products page] load api data';
export const LOAD_API_DATA_SUCCESS = '[products page] load api data success';

export const onLoading = createAction(ON_LOADING);
export const onNotLoading = createAction(ON_NOT_LOADING);
export const loadApiData = createAction(LOAD_API_DATA);
export const loadApiDataSuccess = createAction(
  LOAD_API_DATA_SUCCESS,
  props<{ data: LoadState['data'] }>()
);
