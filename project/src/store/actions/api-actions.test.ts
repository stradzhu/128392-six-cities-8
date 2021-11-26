import {createAPI} from '../../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from '@reduxjs/toolkit';
import {APIRoute, AppRoute, AuthorizationStatus} from '../../consts';
import {
  checkAuthAction, fetchCommentsAction, fetchFavoritesAction, fetchNearOffersAction, fetchOfferByIdAction,
  fetchOffersAction, fetchSetFavoriteAction, loginAction, logoutAction, postCommentsAction
} from './api-actions';
import {
  loadFavorites, loadNearOffers, loadOfferById, loadOfferComments, loadOffers, redirectToRoute,
  requireLogout, setAuthorization, setFavorite, setFavoriteInOffer, setFavoriteNearOffers, setUserInfo
} from './action';
import { adaptCommentsToClient, adaptOffersToClient, adaptOfferToClient, adaptUserInfoToClient} from '../../utils/adapters';
import {makeFakeComment, makeFakeOffer, makeFakeUserInfo} from '../../utils/mocks';
import {AuthData} from '../../types/auth-data';
import {NameSpace} from '../reducer/root-reducer';

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createAPI(onFakeUnauthorized());
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<State, Action, ThunkDispatch<State, typeof api, Action>>(middlewares);

  it('loginAction, should set authorization status is "auth", save user info and redirect to main page when POST /login', async () => {
    const store = mockStore();
    const userInfo = {...makeFakeUserInfo(), token: 'secret'};
    const fakeUser: AuthData = {login: 'test@email.com', password: '123456'};
    mockAPI.onPost(APIRoute.Login).reply(200, userInfo);

    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    expect(store.getActions()).toEqual([
      setAuthorization(AuthorizationStatus.Auth),
      setUserInfo(adaptUserInfoToClient(userInfo)),
      redirectToRoute(AppRoute.Root),
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  it('logoutAction, should dispatch Logout when Delete /logout', async () => {
    const store = mockStore();

    mockAPI.onDelete(APIRoute.Logout).reply(204);
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    expect(store.getActions()).toEqual([requireLogout()]);
    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });

  it('fetchOffersAction, should load offers', async () => {
    const store = mockStore();
    const offers = [makeFakeOffer(), makeFakeOffer(), makeFakeOffer()];

    mockAPI.onGet(APIRoute.Hotels).reply(200, offers);

    await store.dispatch(fetchOffersAction());

    expect(store.getActions()).toEqual([
      loadOffers(adaptOffersToClient(offers)),
    ]);
  });

  it('checkAuthAction, should set authorization status is "auth" and save user info when server return 200', async () => {
    const store = mockStore();
    const userInfo = makeFakeUserInfo();

    mockAPI.onGet(APIRoute.Login).reply(200, userInfo);
    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      setAuthorization(AuthorizationStatus.Auth),
      setUserInfo(adaptUserInfoToClient(userInfo)),
    ]);
  });

  it('fetchOfferByIdAction, should load offer by id', async () => {
    const store = mockStore();
    const OFFER_ID = 123;
    const offer = {...makeFakeOffer(), id: OFFER_ID};

    mockAPI.onGet(`${APIRoute.Hotels}/${OFFER_ID}`).reply(200, offer);

    await store.dispatch(fetchOfferByIdAction(String(OFFER_ID)));

    expect(store.getActions()).toEqual([
      loadOfferById(adaptOfferToClient(offer)),
    ]);
  });

  it('fetchCommentsAction, should load comments for offer', async () => {
    const store = mockStore();
    const OFFER_ID = 123;
    const reviews = [makeFakeComment(), makeFakeComment(), makeFakeComment()];

    mockAPI.onGet(`${APIRoute.Comments}/${OFFER_ID}`).reply(200, reviews);

    await store.dispatch(fetchCommentsAction(String(OFFER_ID)));

    expect(store.getActions()).toEqual([
      loadOfferComments(adaptCommentsToClient(reviews)),
    ]);
  });

  it('fetchNearOffersAction, should load near offers', async () => {
    const store = mockStore();
    const OFFER_ID = 123;
    const nearOffers = [makeFakeOffer(), makeFakeOffer(), makeFakeOffer()];

    mockAPI.onGet(`${APIRoute.Hotels}/${OFFER_ID}/nearby`).reply(200, nearOffers);

    await store.dispatch(fetchNearOffersAction(String(OFFER_ID)));

    expect(store.getActions()).toEqual([
      loadNearOffers(adaptOffersToClient(nearOffers)),
    ]);
  });

  it('fetchSetFavoriteAction, should update favorite status', async () => {
    const store = mockStore({[NameSpace.User]: {authorizationStatus: AuthorizationStatus.Auth}});
    const OFFER_ID = 123;
    const status = true;

    mockAPI.onPost(`${APIRoute.Favorite}/${OFFER_ID}/1`).reply(200);
    await store.dispatch(fetchSetFavoriteAction(OFFER_ID, status));

    expect(store.getActions()).toEqual([
      setFavorite(OFFER_ID, status),
      setFavoriteInOffer(OFFER_ID, status),
      setFavoriteNearOffers(OFFER_ID, status),
    ]);
  });

  it('postCommentsAction, should post comment', async () => {
    const store = mockStore();
    const commentData = {id: '123', rating: 5, comment: ''};
    const OFFER_ID = 123;
    const reviews = [makeFakeComment(), makeFakeComment(), makeFakeComment()];

    mockAPI.onPost(`${APIRoute.Comments}/${OFFER_ID}`).reply(200, reviews);
    await store.dispatch(postCommentsAction(commentData));

    expect(store.getActions()).toEqual([
      loadOfferComments(adaptCommentsToClient(reviews)),
    ]);
  });

  it('fetchFavoritesAction, should load favorites offers', async () => {
    const store = mockStore();
    const favorites = [makeFakeOffer(), makeFakeOffer(), makeFakeOffer()];

    mockAPI.onGet(APIRoute.Favorite).reply(200, favorites);
    await store.dispatch(fetchFavoritesAction());

    expect(store.getActions()).toEqual([
      loadFavorites(adaptOffersToClient(favorites)),
    ]);
  });

});
