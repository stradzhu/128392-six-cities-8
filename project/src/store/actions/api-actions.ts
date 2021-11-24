import {toast} from 'react-toastify';
import {ThunkActionResult} from '../../types/action';
import {
  loadFavorites, loadNearOffers, loadOfferById, loadOfferComments, loadOffers, redirectToRoute,
  requireLogout, setAuthorization, setFavorite, setFavoriteInOffer, setFavoriteNearOffers, setUserInfo
} from './action';
import {dropToken, saveToken} from '../../services/token';
import {APIRoute, AppRoute, AuthorizationStatus, InformationMessages} from '../../consts';
import {AuthData} from '../../types/auth-data';
import {adaptCommentsToClient, adaptOffersToClient, adaptOfferToClient, adaptUserInfoToClient} from '../../utils';
import {NameSpace} from '../reducer/root-reducer';

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.post(APIRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(setAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserInfo(adaptUserInfoToClient(data)));
      dispatch(redirectToRoute(AppRoute.Root));
    } catch {
      toast.error(InformationMessages.AUTH_FAIL);
    }
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(APIRoute.Hotels);
      dispatch(loadOffers(adaptOffersToClient(data)));
    } catch {
      toast.error(InformationMessages.DATA_LOADING_ERROR);
    }
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(APIRoute.Login);
      dispatch(setAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserInfo(adaptUserInfoToClient(data)));
    } catch {
      toast.info(InformationMessages.AUTH_NO);
    }
  };

export const fetchOfferByIdAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(`${APIRoute.Hotels}/${id}`);
      dispatch(loadOfferById(adaptOfferToClient(data)));
    } catch {
      dispatch(loadOfferById(null));
      toast.error(InformationMessages.DATA_LOADING_ERROR);
    }
  };

export const fetchCommentsAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(`${APIRoute.Comments}/${id}`);
      dispatch(loadOfferComments(adaptCommentsToClient(data)));
    } catch {
      dispatch(loadOfferComments([]));
    }
  };

export const fetchNearOffersAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(`${APIRoute.Hotels}/${id}/nearby`);
      dispatch(loadNearOffers(adaptOffersToClient(data)));
    } catch {
      dispatch(loadNearOffers([]));
    }
  };

export const fetchSetFavoriteAction = (id: number, status: boolean): ThunkActionResult =>
  async (dispatch, getState, api) => {
    if (getState()[NameSpace.user].authorizationStatus === AuthorizationStatus.Auth) {
      try {
        await api.post(`${APIRoute.Favorite}/${id}/${Number(status)}`);
        dispatch(setFavorite(id, status)); // обновит массив offers
        dispatch(setFavoriteInOffer(id, status));  // обновит один offer
        dispatch(setFavoriteNearOffers(id, status));  // обновит nearOffers
      } catch {
        toast.error(InformationMessages.DATA_LOADING_ERROR);
      }
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  };

export const postCommentsAction = ({id, rating, comment}: {id: string, rating: number, comment: string}): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    return api.post(`${APIRoute.Comments}/${id}`, {rating, comment})
      .then(({data}) => {
        dispatch(loadOfferComments(adaptCommentsToClient(data)));
      }, () => {
        toast.error(InformationMessages.POSTING_COMMENT_ERROR);
        return Promise.reject();
      })
  };

export const fetchFavoritesAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get(`${APIRoute.Favorite}`);
      dispatch(loadFavorites(adaptOffersToClient(data)));
    } catch {
      dispatch(loadFavorites([]));
      toast.error(InformationMessages.DATA_LOADING_ERROR);
    }
  };
