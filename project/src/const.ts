enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/property/:id',
  FavoritesEmpty = '/favorites-empty',
  MainEmpty = '/main-empty',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH'
}

export {AppRoute, AuthorizationStatus};
