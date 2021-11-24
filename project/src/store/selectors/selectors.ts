import {NameSpace} from '../reducer/root-reducer';
import {MainState, DataState, UserState, State} from '../../types/state';

export const getActiveCity = (state: State): MainState['activeCity'] => state[NameSpace.Main].activeCity;
export const getCurrentSortType = (state: State): MainState['currentSortType'] => state[NameSpace.Main].currentSortType;

export const getOffers = (state: State): DataState['offers'] => state[NameSpace.Data].offers;
export const getFavorites = (state: State): DataState['favorites'] => state[NameSpace.Data].favorites;
export const getOffer = (state: State): DataState['offer'] => state[NameSpace.Data].offer;
export const getNearOffers = (state: State): DataState['nearOffers'] => state[NameSpace.Data].nearOffers;
export const getReviews = (state: State): DataState['reviews'] => state[NameSpace.Data].reviews;

export const getAuthorizationStatus = (state: State): UserState['authorizationStatus'] => state[NameSpace.User].authorizationStatus;
export const getUserInfo = (state: State): UserState['userInfo'] => state[NameSpace.User].userInfo;
