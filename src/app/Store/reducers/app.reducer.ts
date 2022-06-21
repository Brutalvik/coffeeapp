import { createReducer, on } from '@ngrx/store';
import { AppStateInterface } from 'src/app/Models/app.model';
import {
  getErrorData,
  getSuccessData,
  isLoaded,
  setSelectedCoffee,
} from '../actions/app.actions';

//App State Interface
const initialState: AppStateInterface = {
  isLoading: false,
  data: null,
  error: null,
  coffee: null,
};

//Reducers
const _appReducer = createReducer(
  initialState,
  on(isLoaded, (state, action) => {
    return {
      state,
      isLoading: action.status,
    };
  }),

  on(getSuccessData, (state, action) => {
    return {
      ...state,
      data: action.data,
    };
  }),

  on(getErrorData, (state, action) => {
    return {
      state,
      error: action.error,
    };
  }),

  on(setSelectedCoffee, (state, action) => {
    return {
      state,
      coffee: action.coffee,
    };
  })
);

export function appReducer(state, action) {
  return _appReducer(state, action);
}
