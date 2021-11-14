import {OffersType} from './types/offer-info';
import {SortTypes} from './consts';
import {Reviews} from './types/reviews';

export const getSortedOffers = (offers: OffersType, SortType: SortTypes): OffersType => {
  switch (SortType) {
    case SortTypes.PRICE_UP: {
      return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
    }
    case SortTypes.PRICE_DOWN: {
      return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
    }
    case SortTypes.RATING_DOWN: {
      return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
    }
    default: {
      return offers;
    }
  }
};

export const getRating = (rating: number): string => `${Math.round(rating) * 100 / 5}%`;

export const getActualReviews = (reviews: Reviews): Reviews => reviews.sort((reviewA, reviewB) => Date.parse(reviewB.date) - Date.parse(reviewA.date)).slice(0, 10);
