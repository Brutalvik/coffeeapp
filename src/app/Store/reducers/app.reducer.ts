import { createReducer, on } from '@ngrx/store';
import { AppStateInterface } from 'src/app/Models/app.model';
import { getSuccessData, isLoaded } from '../actions/app.actions';

const initialState: AppStateInterface = {
  isLoading: false,
  coffeeData: null,
};

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
  })
);

export function appReducer(state, action) {
  return _appReducer(state, action);
}

export const getIsLoading = (state: AppStateInterface) => state.isLoading;
