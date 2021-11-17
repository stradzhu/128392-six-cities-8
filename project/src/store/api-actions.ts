import {toast} from 'react-toastify';
import {ThunkActionResult} from '../types/action';
import {loadOffers, setAuthorization, requireLogout, redirectToRoute, setUserInfo} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute, AUTH_CHECK_FAIL_MESSAGE, AUTH_LOGIN_FAIL_MESSAGE, AuthorizationStatus} from '../consts';
import {AuthData} from '../types/auth-data';
import {OffersType} from '../types/offer-info';
import {adaptOffersToClient, adaptUserInfoToClient} from '../utils';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OffersType>(APIRoute.Hotels);
    dispatch(loadOffers(adaptOffersToClient(data)));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      dispatch(setAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserInfo(adaptUserInfoToClient(data)));
    } catch {
      toast.info(AUTH_CHECK_FAIL_MESSAGE);
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.post(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(setAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserInfo(adaptUserInfoToClient(data)));
      dispatch(redirectToRoute(AppRoute.Root));
    } catch {
      toast.info(AUTH_LOGIN_FAIL_MESSAGE);
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
