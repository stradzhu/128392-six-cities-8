import {OffersType} from '../types/offer-info';
import {ReviewSetting, SortTypes} from '../consts';
import {Reviews} from '../types/reviews';

export const getSortedOffers = (offers: OffersType, SortType: SortTypes): OffersType => {
  switch (SortType) {
    case SortTypes.PriceUp: {
      return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
    }
    case SortTypes.PriceDown: {
      return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
    }
    case SortTypes.RatingDown: {
      return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
    }
    default: {
      return offers;
    }
  }
};

export const getRating = (rating: number): string => `${Math.round(rating) * 100 / 5}%`;

export const getActualReviews = (reviews: Reviews): Reviews => (
  reviews.slice().sort((reviewA, reviewB) => Date.parse(reviewB.date) - Date.parse(reviewA.date))
    .slice(0, ReviewSetting.MaxCountPerPage));

export const getRandomInteger = (min: number, max: number): number => Math.round(min - 0.5 + Math.random() * (max - min + 1));
