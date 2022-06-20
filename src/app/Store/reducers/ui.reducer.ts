import { AppStateInterface } from '../../Models/app.model';
import { UIActions, START_LOADING, STOP_LOADING } from '../actions/app.actions';

const initialState: AppStateInterface = {
  isLoading: false,
  coffeeData: null,
};

export function uiReducer(state = initialState, action: UIActions) {
  switch (action.type) {
    case START_LOADING:
      return { isLoading: true };
    case STOP_LOADING:
      return { isLoading: false };
    default:
      return state;
  }
}

export const getIsLoading = (state: AppStateInterface) => state.isLoading;
