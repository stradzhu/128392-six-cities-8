export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum UrlMarker {
  DEFAULT = '/img/pin.svg',
  CURRENT = '/img/pin-active.svg',
}

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

export const DEFAULT_SORT_TYPE = SortTypes.POPULAR;

export enum InformationMessages {
  AUTH_FAIL = 'Ошибка авторизации, возможно, неправильный email или пароль',
  DATA_LOADING_ERROR = 'Ошибка загрузки данных',
  AUTH_NO = 'Не забудьте авторизоваться'
}

export enum ReviewSetting {
  MIN = 50,
  MAX = 300,
  MAX_COUNT_PER_PAGE = 10
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
