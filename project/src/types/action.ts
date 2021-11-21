import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {RootState} from '../store/reducer/root-reducer';
import {
  changeCity,
  changeSortType,
  setFavorite,
  setFavoriteInOffer,
  loadOffers,
  setAuthorization,
  requireLogout,
  redirectToRoute,
  setUserInfo,
  loadOfferById, loadOfferComments, loadNearOffers, loadFavorites
} from '../store/actions/action';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSortType = 'main/changeSortType',
  SetFavorite = 'data/favorite',
  SetFavoriteInOffer = 'data/favoriteInOffer',
  LoadOffers = 'data/loadOffers',
  SetAuthorization = 'user/setAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'user/redirectToRoute',
  SetUserInfo = 'user/setUserInfo',
  LoadOfferById = 'data/loadOffersById',
  LoadOfferComments = 'data/loadOfferComments',
  LoadNearOffers = 'data/loadNearOffers',
  LoadFavorites = 'data/loadFavorites',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof setFavorite>
  | ReturnType<typeof setFavoriteInOffer>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof setAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof setUserInfo>
  | ReturnType<typeof loadOfferById>
  | ReturnType<typeof loadOfferComments>
  | ReturnType<typeof loadNearOffers>
  | ReturnType<typeof loadFavorites>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, RootState, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<RootState, AxiosInstance, Actions>;
