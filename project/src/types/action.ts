export enum ActionType {
  ChangeCity = 'main/changeCity',
}

type ChangeCityAction = {
  type: ActionType.ChangeCity,
  payload: string,
};

export type Actions = ChangeCityAction;
