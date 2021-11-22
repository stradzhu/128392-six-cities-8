import {OffersType, OfferType} from './offer-info';
import {Reviews} from './reviews';
import {AuthorizationStatus, SortTypes} from '../consts';
import {UserInfo} from './user-info';

export type State = {
  activeCity: string,
  authorizationStatus: AuthorizationStatus
  currentSortType: SortTypes,
  offers: OffersType,
  favorites: OffersType,
  offer: OfferType | null,
  nearOffers: OffersType,
  reviews: Reviews,
  userInfo: UserInfo | null
}
