import {changeCity, changeSortType, toggleFavorites, signOut} from '../store/action';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeSortType = 'main/changeSortType',
  ToggleFavorites = 'favorites/toggle',
  SignOut = 'signOut'
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof toggleFavorites>
  | ReturnType<typeof signOut>;
