import {Actions, ActionType} from '../types/action';

const changeCity = (city: string): Actions => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export {changeCity};
