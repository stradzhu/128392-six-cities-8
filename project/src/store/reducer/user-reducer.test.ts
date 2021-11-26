import {userReducer, initialState} from './user-reducer';
import {requireLogout, setAuthorization, setUserInfo} from '../actions/action';
import {AuthorizationStatus} from '../../consts';
import {makeFakeUserInfo} from '../../utils/mocks';

describe('Reducer: userReducer', () => {
  it('should change authorization status', () => {
    expect(userReducer(initialState, setAuthorization(AuthorizationStatus.Auth)))
      .toEqual({...initialState, authorizationStatus: AuthorizationStatus.Auth});
  });

  it('should change authorization status to "NO_AUTH" and remove user info', () => {
    const stateWithUserInfo = {...initialState, userInfo: makeFakeUserInfo()};
    expect(userReducer(stateWithUserInfo, requireLogout()))
      .toEqual({...initialState, authorizationStatus: AuthorizationStatus.NoAuth});
  });

  it('should set user info', () => {
    const userInfo = makeFakeUserInfo();
    const stateWithUserInfo = {...initialState, userInfo};
    expect(userReducer(initialState, setUserInfo(userInfo)))
      .toEqual(stateWithUserInfo);
  });

  it('on an unknown actions should return initial state', () => {
    expect(userReducer(initialState, {type: 'UNKNOWN_ACTION', payload: 'lorem ipsum'}))
      .toEqual(initialState);
  });
});
