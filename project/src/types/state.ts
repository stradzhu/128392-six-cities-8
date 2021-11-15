import {OffersType} from './offer-info';
import {Reviews} from './reviews';
import {AuthorizationStatus, SortTypes} from '../consts';

export type State = {
  activeCity: string,
  authorizationStatus: AuthorizationStatus
  currentSortType: SortTypes,
  offers: OffersType,
  reviews: Reviews,
}
