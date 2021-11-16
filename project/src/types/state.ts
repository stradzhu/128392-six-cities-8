import {OffersType} from './offer-info';
import {Reviews} from './reviews';
import {AuthorizationStatus, SortTypes} from '../consts';
import {UserInfo} from './user-info';

export type State = {
  activeCity: string,
  authorizationStatus: AuthorizationStatus
  currentSortType: SortTypes,
  offers: OffersType,
  reviews: Reviews,
  isDataLoaded: boolean,
  userInfo: UserInfo | null
}
