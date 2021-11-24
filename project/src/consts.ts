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
  Default = '/img/pin.svg',
  Current = '/img/pin-active.svg',
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
  Popular = 'Popular',
  PriceUp = 'Price: low to high',
  PriceDown = 'Price: high to low',
  RatingDown = 'Top rated first',
}

export const DEFAULT_SORT_TYPE = SortTypes.Popular;

export enum InformationMessages {
  AuthFail = 'Ошибка авторизации, возможно, неправильный email или пароль',
  DataLoadingError = 'Ошибка загрузки данных',
  AuthNo = 'Не забудьте авторизоваться',
  PostingCommentError = 'Ошибка отправки комментария',
}

export enum ReviewSetting {
  Min = 50,
  Max = 300,
  MaxCountPerPage = 10
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

export const MAX_OFFER_PHOTO = 6;
