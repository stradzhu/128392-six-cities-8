type HostType = {
  name: string,
  avatar: string,
  isPro: boolean,
  description: string
}

type CityType = {
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },
  title: string
}

export type OfferType = {
  id: number,
  title: string,
  images: {
    id: number,
    path: string
  }[],
  isPremium: boolean,
  price: number,
  rating: number,
  type: string,
  bedroomsCount: number,
  maxAdults: number,
  inside: {
    id: number,
    title: string
  }[],
  host: HostType,
  city: CityType
}

export type OffersType = OfferType[];
