import {NameSpace} from '../reducer/root-reducer';
import {MainState, DataState, UserState, State} from '../../types/state';

export const getActiveCity = (state: State): MainState['activeCity'] => state[NameSpace.main].activeCity;
export const getCurrentSortType = (state: State): MainState['currentSortType'] => state[NameSpace.main].currentSortType;

export const getOffers = (state: State): DataState['offers'] => state[NameSpace.data].offers;
export const getFavorites = (state: State): DataState['favorites'] => state[NameSpace.data].favorites;
export const getOffer = (state: State): DataState['offer'] => state[NameSpace.data].offer;
export const getNearOffers = (state: State): DataState['nearOffers'] => state[NameSpace.data].nearOffers;
export const getReviews = (state: State): DataState['reviews'] => state[NameSpace.data].reviews;

export const getAuthorizationStatus = (state: State): UserState['authorizationStatus'] => state[NameSpace.user].authorizationStatus;
export const getUserInfo = (state: State): UserState['userInfo'] => state[NameSpace.user].userInfo;
