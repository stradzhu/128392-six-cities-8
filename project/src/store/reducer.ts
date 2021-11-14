import {AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../consts';
import {offers} from '../mocks/offers';
import {authorizationStatus} from '../mocks/authorization-status';
import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';
import {reviews} from '../mocks/reviews';

const initialState: State = {
  activeCity: DEFAULT_CITY,
  offers: offers,
  currentSortType: DEFAULT_SORT_TYPE,
  reviews: reviews,
  authorizationStatus: authorizationStatus,
};

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, activeCity: action.payload};
    case ActionType.ChangeSortType:
      return {...state, currentSortType: action.payload};
    case ActionType.ToggleFavorites:
      return {...state, offers: state.offers.map((offer) => {
        if (offer.id === action.payload) {
          offer.isFavorite = !offer.isFavorite;
          return offer;
        }
        return offer;
      }),
      };
    case ActionType.SignOut:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};
