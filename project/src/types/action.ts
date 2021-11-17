import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';
import {changeCity, changeSortType, toggleFavorites, loadOffers, setAuthorization, requireLogout, redirectToRoute, setUserInfo} from '../store/action';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSortType = 'main/changeSortType',
  ToggleFavorites = 'favorites/toggle',
  LoadOffers = 'data/loadOffers',
  SetAuthorization = 'user/setAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'user/redirectToRoute',
  SetUserInfo = 'user/setUserInfo',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof toggleFavorites>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof setAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof setUserInfo>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
