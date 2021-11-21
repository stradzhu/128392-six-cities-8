import {OffersType, OfferType} from './offer-info';
import {Reviews} from './reviews';
import {AuthorizationStatus, SortTypes} from '../consts';
import {UserInfo} from './user-info';
import {RootState} from '../store/reducer/root-reducer';

export type MainState = {
  activeCity: string,
  currentSortType: SortTypes,
}

export type DataState = {
  offers: OffersType,
  favorites: OffersType,
  offer: OfferType | null,
  nearOffers: OffersType,
  reviews: Reviews,
}

export type UserState = {
  authorizationStatus: AuthorizationStatus,
  userInfo: UserInfo | null
}

export type State = RootState;
