import {ActionType} from '../types/action';
import {AppRoute, AuthorizationStatus, SortTypes} from '../consts';
import {OffersType, OfferType} from '../types/offer-info';
import {UserInfo} from '../types/user-info';
import {Reviews} from '../types/reviews';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const changeSortType = (type: SortTypes) => ({
  type: ActionType.ChangeSortType,
  payload: type,
} as const);

export const setFavorite = (id: number, status: boolean) => ({
  type: ActionType.SetFavorite,
  payload: {id, status},
} as const);

export const setFavoriteInOffer = (id: number, status: boolean) => ({
  type: ActionType.SetFavoriteInOffer,
  payload: {id, status},
} as const);

export const loadOffers = (offers: OffersType) => ({
  type: ActionType.LoadOffers,
  payload: offers,
} as const);

export const setAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.SetAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

export const setUserInfo = (user: UserInfo) => ({
  type: ActionType.SetUserInfo,
  payload: user,
} as const);

export const loadOfferById = (offer: OfferType | null) => ({
  type: ActionType.LoadOfferById,
  payload: offer,
} as const);

export const loadOfferComments = (reviews: Reviews) => ({
  type: ActionType.LoadOfferComments,
  payload: reviews,
} as const);

export const loadNearOffers = (offers: OffersType) => ({
  type: ActionType.LoadNearOffers,
  payload: offers,
} as const);

export const loadFavorites = (favorites: OffersType) => ({
  type: ActionType.LoadFavorites,
  payload: favorites,
} as const);

