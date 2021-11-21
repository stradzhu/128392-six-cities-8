import {DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../../consts';
import {MainState} from '../../types/state';
import {Actions, ActionType} from '../../types/action';

const initialState: MainState = {
  activeCity: DEFAULT_CITY,
  currentSortType: DEFAULT_SORT_TYPE,
};

export const mainReducer = (state: MainState = initialState, action: Actions): MainState => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, activeCity: action.payload};
    case ActionType.ChangeSortType:
      return {...state, currentSortType: action.payload};
    default:
      return state;
  }
};
