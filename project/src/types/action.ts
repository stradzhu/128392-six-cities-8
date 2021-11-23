import {ThunkAction} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';
import {Action} from '@reduxjs/toolkit';

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

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;
