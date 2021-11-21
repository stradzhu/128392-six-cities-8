import {NameSpace, RootState} from '../reducer/root-reducer';
import {MainState, DataState, UserState} from '../../types/state';

export const getActiveCity = (state: RootState): MainState['activeCity'] => state[NameSpace.main].activeCity;
export const getCurrentSortType = (state: RootState): MainState['currentSortType'] => state[NameSpace.main].currentSortType;

export const getOffers = (state: RootState): DataState['offers'] => state[NameSpace.data].offers;
export const getFavorites = (state: RootState): DataState['favorites'] => state[NameSpace.data].favorites;
export const getOffer = (state: RootState): DataState['offer'] => state[NameSpace.data].offer;
export const getNearOffers = (state: RootState): DataState['nearOffers'] => state[NameSpace.data].nearOffers;
export const getReviews = (state: RootState): DataState['reviews'] => state[NameSpace.data].reviews;

export const getAuthorizationStatus = (state: RootState): UserState['authorizationStatus'] => state[NameSpace.user].authorizationStatus;
export const getUserInfo = (state: RootState): UserState['userInfo'] => state[NameSpace.user].userInfo;
