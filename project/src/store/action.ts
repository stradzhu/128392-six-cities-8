import {ActionType} from '../types/action';
import {SortTypes} from '../consts';

const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

const changeSortType = (type: SortTypes) => ({
  type: ActionType.ChangeSortType,
  payload: type,
} as const);

const toggleFavorites = (id: number) => ({
  type: ActionType.ToggleFavorites,
  payload: id,
} as const);

const signOut = () => ({
  type: ActionType.SignOut,
} as const);

export {changeCity, changeSortType, toggleFavorites, signOut};
