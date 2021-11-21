import {AuthorizationStatus} from '../../consts';
import {UserState} from '../../types/state';
import {Actions, ActionType} from '../../types/action';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
};

export const userReducer = (state: UserState = initialState, action: Actions): UserState => {
  switch (action.type) {
    case ActionType.SetAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth, userInfo: null};
    case ActionType.SetUserInfo:
      return {...state, userInfo: action.payload};
    default:
      return state;
  }
};
