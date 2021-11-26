import {OfferType} from '../types/offer-info';
import faker from 'faker';
import {UserInfo} from '../types/user-info';
import {Review} from '../types/reviews';

export const makeFakeOffer = (): OfferType => ({
  bedrooms: faker.datatype.number(9),
  city: {
    location: {
      latitude: Number(faker.address.latitude()),
      longitude: Number(faker.address.longitude()),
      zoom: faker.datatype.number({
        min: 5,
        max: 13,
      }),
    },
    name: faker.address.city(),
  },
  description: faker.lorem.paragraph(),
  goods: faker.random.arrayElements(faker.lorem.words(10).split(' ')),
  host: {
    avatarUrl: faker.internet.avatar(),
    id: faker.datatype.number(),
    isPro: faker.datatype.boolean(),
    name: faker.name.firstName(),
  },
  id: faker.datatype.number(),
  images: faker.random.arrayElements(new Array(10).fill(faker.image.imageUrl(300, 200))),
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  location: {
    latitude: Number(faker.address.latitude()),
    longitude: Number(faker.address.longitude()),
    zoom: faker.datatype.number({
      min: 5,
      max: 13,
    }),
  },
  maxAdults: faker.datatype.number(9),
  previewImage: faker.image.imageUrl(),
  price: faker.datatype.number(999),
  rating: faker.datatype.number(5),
  title: faker.lorem.sentence(),
  type: faker.lorem.word(),
});

export const makeFakeUserInfo = (): UserInfo => ({
  avatarUrl: faker.internet.avatar(),
  email: faker.internet.email(),
  id: String(faker.datatype.number()),
  isPro: faker.datatype.boolean(),
  name: faker.name.firstName(),
  token: faker.lorem.word(),
});

export const makeFakeComment = (): Review => ({
  comment: faker.lorem.sentence(),
  date: faker.date.past().toISOString(),
  id: faker.datatype.number(),
  rating: faker.datatype.number(5),
  user: {
    avatarUrl: faker.internet.avatar(),
    id: String(faker.datatype.number()),
    isPro: faker.datatype.boolean(),
    name: faker.name.firstName(),
  },
});
