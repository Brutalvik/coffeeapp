import { createReducer, on } from '@ngrx/store';
import {
  loadApiDataSuccess,
  onLoading,
  onNotLoading,
} from '../Actions/store.actions';
import { initialState } from '../State/store.state';

const _appReducer = createReducer(
  initialState,
  on(onLoading, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(onNotLoading, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(onLoading, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(loadApiDataSuccess, (state, action) => {
    return {
      ...state,
      data: action.data,
    };
  })
);
const _dataReducer = createReducer(initialState);

export function appReducer(state, action) {
  return _appReducer(state, action);
}
