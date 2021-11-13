enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH'
}

const RatingStar = [
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

const URL_MARKER_DEFAULT = '/img/pin.svg';

const URL_MARKER_CURRENT = '/img/pin-active.svg';

const ALL_CITY_LIST = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const DEFAULT_CITY = ALL_CITY_LIST[0];

enum SortTypes {
  POPULAR = 'Popular',
  PRICE_DOWN = 'Price: low to high',
  PRICE_UP = 'Price: high to low',
  RATING_DOWN = 'Top rated first',
}

const DEFAULT_SORT_TYPE = SortTypes.POPULAR;

export {AppRoute, AuthorizationStatus, RatingStar, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, DEFAULT_CITY, ALL_CITY_LIST, SortTypes, DEFAULT_SORT_TYPE};
