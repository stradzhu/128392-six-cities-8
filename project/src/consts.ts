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

export {Setting, AppRoute, AuthorizationStatus};
