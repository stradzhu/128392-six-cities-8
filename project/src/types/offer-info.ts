export type LocationType = {
  latitude: number,
  longitude: number,
  zoom: number
}

export type CityType = {
  location: LocationType,
  name: string
}

export type OfferType = {
  bedrooms: number,
  city: CityType,
  description: string,
  goods: string[],
  host: {
    avatarUrl: string,
    ['avatar_url']?: string,
    id: number
    isPro: boolean,
    ['is_pro']?: boolean,
    name: string,
  },
  id: number,
  images: string[],
  isFavorite: boolean,
  ['is_favorite']?: boolean,
  isPremium: boolean,
  ['is_premium']?: boolean,
  location: LocationType,
  maxAdults: number,
  ['max_adults']?: number,
  previewImage: string,
  ['preview_image']?: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}

export type OffersType = OfferType[];

export type PointType = {
  location: LocationType,
  id: number
}

export type PointsType = PointType[]
