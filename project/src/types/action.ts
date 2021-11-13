import {SortTypes} from '../consts';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSortType = 'main/changeSortType',
  ToggleFavorites = 'favorites/toggle',
  SignOut = 'signOut'
}

type ChangeCityAction = {
  type: ActionType.ChangeCity,
  payload: string,
};

type ChangeSortTypeAction = {
  type: ActionType.ChangeSortType,
  payload: SortTypes,
};

type ToggleFavoritesAction = {
  type: ActionType.ToggleFavorites,
  payload: number,
};

type SignOut = {
  type: ActionType.SignOut
};

export type Actions = ChangeCityAction
  | ChangeSortTypeAction
  | ToggleFavoritesAction
  | SignOut;
