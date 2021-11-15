import {ActionType} from '../types/action';
import {SortTypes} from '../consts';

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

export const signOut = () => ({
  type: ActionType.SignOut,
} as const);
