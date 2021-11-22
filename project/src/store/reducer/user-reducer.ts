import {AuthorizationStatus} from '../../consts';
import {UserState} from '../../types/state';
import {createReducer} from '@reduxjs/toolkit';
import {setAuthorization, requireLogout, setUserInfo} from '../actions/action';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuthorization, (state: UserState, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state: UserState) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.userInfo = null;
    })
    .addCase(setUserInfo, (state: UserState, action) => {
      state.userInfo = action.payload;
    });
});
