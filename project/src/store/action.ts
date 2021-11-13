import {Actions, ActionType} from '../types/action';
import {SortTypes} from '../consts';

const changeCity = (city: string): Actions => ({
  type: ActionType.ChangeCity,
  payload: city,
});

const changeSortType = (type: SortTypes): Actions => ({
  type: ActionType.ChangeSortType,
  payload: type,
});

const toggleFavorites = (id: number): Actions => ({
  type: ActionType.ToggleFavorites,
  payload: id,
});

const signOut = (): Actions => ({
  type: ActionType.SignOut,
});

export {changeCity, changeSortType, toggleFavorites, signOut};
