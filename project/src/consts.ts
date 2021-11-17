export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RatingStar = [
  {
    mark: 5,
    title: 'perfect',
  },
  {
    mark: 4,
    title: 'good',
  },
  {
    mark: 3,
    title: 'not bad',
  },
  {
    mark: 2,
    title: 'badly',
  },
  {
    mark: 1,
    title: 'terribly',
  },
];

export const URL_MARKER_DEFAULT = '/img/pin.svg';

export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export const ALL_CITY_LIST = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const DEFAULT_CITY = ALL_CITY_LIST[0];

export enum SortTypes {
  POPULAR = 'Popular',
  PRICE_DOWN = 'Price: low to high',
  PRICE_UP = 'Price: high to low',
  RATING_DOWN = 'Top rated first',
}

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export const DEFAULT_SORT_TYPE = SortTypes.POPULAR;

export const AUTH_CHECK_FAIL_MESSAGE = 'Не забудьте авторизоваться';

export const AUTH_LOGIN_FAIL_MESSAGE = 'Ошибка в логине/пароле';
