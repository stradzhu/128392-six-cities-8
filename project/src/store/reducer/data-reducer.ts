import {DataState} from '../../types/state';
import {Actions, ActionType} from '../../types/action';

const initialState: DataState = {
  offers: [],
  offer: null,
  favorites: [],
  nearOffers: [],
  reviews: [],
};

export const dataReducer = (state: DataState = initialState, action: Actions): DataState => {
  switch (action.type) {
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
    default:
      return state;
  }
};
