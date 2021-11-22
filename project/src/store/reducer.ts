import {AuthorizationStatus, DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../consts';
import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';

const initialState: State = {
  activeCity: DEFAULT_CITY,
  offers: [],
  offer: null,
  favorites: [],
  nearOffers: [],
  reviews: [],
  currentSortType: DEFAULT_SORT_TYPE,
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
};

export const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, activeCity: action.payload};
    case ActionType.ChangeSortType:
      return {...state, currentSortType: action.payload};
    case ActionType.SetFavorite:
      return {
        ...state, offers: state.offers.map((offer) => {
          if (offer.id === action.payload.id) {
            offer.isFavorite = action.payload.status;
            return offer;
          }
          return offer;
        }),
      };
    case ActionType.SetFavoriteInOffer:
      if (state.offer && state.offer.id === action.payload.id) {
        return {...state, offer: Object.assign({}, state.offer, {isFavorite: action.payload.status})};
      }
      return state;
    case ActionType.LoadOffers:
      return {...state, offers: action.payload};
    case ActionType.LoadFavorites:
      return {...state, favorites: action.payload};
    case ActionType.LoadOfferComments:
      return {...state, reviews: action.payload};
    case ActionType.LoadOfferById:
      return {...state, offer: action.payload};
    case ActionType.LoadNearOffers:
      return {...state, nearOffers: action.payload};
    case ActionType.SetAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth, userInfo: null};
    case ActionType.SetUserInfo:
      return {...state, userInfo: action.payload};
    default:
      return state;
  }
};
