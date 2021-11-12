import {DEFAULT_CITY} from '../consts';
import {offers} from '../mocks/offers';
import {State} from '../types/state';
import {ActionType, Actions} from '../types/action';

const initialState = {
  activeCity: DEFAULT_CITY,
  offers: offers.filter(({city: {title}}) => title === DEFAULT_CITY),
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, activeCity: action.payload, offers: offers.filter(({city: {title}}) => title === action.payload)};
    default:
      return state;
  }
};

export {reducer};
