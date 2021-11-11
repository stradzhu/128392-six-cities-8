const Setting = {
  COUNT_RENTAL_OFFERS: 789,
  COUNT_FAVORITES: 123,
};

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

export {Setting, AppRoute, AuthorizationStatus, RatingStar, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, DEFAULT_CITY, ALL_CITY_LIST};
