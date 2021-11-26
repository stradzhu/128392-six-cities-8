import {redirect} from './redirect';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {AnyAction} from '@reduxjs/toolkit';
import {redirectToRoute} from '../actions/action';
import {AppRoute} from '../../consts';

const fakeHistory = {
  location: {pathname: ''},
  push(path: string) {
    this.location.pathname = path;
  },
};

jest.mock('../../browser-history', () => fakeHistory);

const mockStore = configureMockStore<State, AnyAction>([redirect]);
const store = mockStore();

describe('Middleware: redirect', () => {
  beforeEach(() => fakeHistory.push(''));

  it('should be redirect to /login', () => {
    store.dispatch(redirectToRoute(AppRoute.Login));
    expect(fakeHistory.location.pathname).toBe(AppRoute.Login);
    expect(store.getActions()).toEqual([redirectToRoute(AppRoute.Login)]);
  });

  it('should not to be redirect /lose because bad action', () => {
    store.dispatch({type: 'UNKNOWN_ACTION', payload: AppRoute.Favorites});
    expect(fakeHistory.location.pathname).not.toBe(AppRoute.Favorites);
  });
});
