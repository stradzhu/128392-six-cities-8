import {ActionType} from '../../types/action';
import {AppRoute, AuthorizationStatus, SortTypes} from '../../consts';
import {OffersType, OfferType} from '../../types/offer-info';
import {UserInfo} from '../../types/user-info';
import {Reviews} from '../../types/reviews';
import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction(
  ActionType.ChangeCity, (city: string) => ({
    payload: city,
  }),
);

export const changeSortType = createAction(
  ActionType.ChangeSortType, (type: SortTypes) => ({
    payload: type,
  }),
);

export const setFavorite = createAction(
  ActionType.SetFavorite, (id: number, status: boolean) => ({
    payload: {id, status},
  }),
);

export const setFavoriteNearOffers = createAction(
  ActionType.SetFavoriteNearOffers, (id: number, status: boolean) => ({
    payload: {id, status},
  }),
);

export const setFavoriteInOffer = createAction(
  ActionType.SetFavoriteInOffer, (id: number, status: boolean) => ({
    payload: {id, status},
  }),
);

export const loadOffers = createAction(
  ActionType.LoadOffers, (offers: OffersType) => ({
    payload: offers,
  }),
);

export const setAuthorization = createAction(
  ActionType.SetAuthorization, (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute, (url: AppRoute) => ({
    payload: url,
  }),
);

export const setUserInfo = createAction(
  ActionType.SetUserInfo, (user: UserInfo) => ({
    payload: user,
  }),
);

export const loadOfferById = createAction(
  ActionType.LoadOfferById, (offer: OfferType | null) => ({
    payload: offer,
  }),
);

export const loadOfferComments = createAction(
  ActionType.LoadOfferComments, (reviews: Reviews) => ({
    payload: reviews,
  }),
);

export const loadNearOffers = createAction(
  ActionType.LoadNearOffers, (offers: OffersType) => ({
    payload: offers,
  }),
);

export const loadFavorites = createAction(
  ActionType.LoadFavorites, (favorites: OffersType) => ({
    payload: favorites,
  }),
);

