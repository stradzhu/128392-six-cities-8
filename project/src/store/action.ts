import {ActionType} from '../types/action';
import {AppRoute, AuthorizationStatus, SortTypes} from '../consts';
import {OffersType} from '../types/offer-info';
import {UserInfo} from '../types/user-info';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const changeSortType = (type: SortTypes) => ({
  type: ActionType.ChangeSortType,
  payload: type,
} as const);

export const toggleFavorites = (id: number) => ({
  type: ActionType.ToggleFavorites,
  payload: id,
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
