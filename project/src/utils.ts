import {OffersType, OfferType} from './types/offer-info';
import {ReviewSetting, SortTypes} from './consts';
import {Review, Reviews} from './types/reviews';
import {UserInfo} from './types/user-info';

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

export const adaptOfferToClient = (offerFromBackend: OfferType): OfferType => {
  const adaptedOffer = Object.assign(
    {},
    offerFromBackend,
    {
      host: {
        avatarUrl: offerFromBackend.host.avatar_url,
        isPro: offerFromBackend.host.is_pro,
      },
      isFavorite: offerFromBackend.is_favorite,
      isPremium: offerFromBackend.is_premium,
      maxAdults: offerFromBackend.max_adults,
      previewImage: offerFromBackend.preview_image,
    },
  ) as OfferType;

  adaptedOffer.type = adaptedOffer.type.charAt(0).toUpperCase() + adaptedOffer.type.slice(1); // делает первый символ заглавным

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;

  return adaptedOffer;
};

export const adaptOffersToClient = (offersFromBackend: OffersType): OffersType => (
  offersFromBackend.map((offerFromBackend) => (
    adaptOfferToClient(offerFromBackend)
  ))
);

export const adaptUserInfoToClient = (userInfo: UserInfo): UserInfo => {
  const adaptedUserInfo = Object.assign(
    {},
    userInfo,
    {
      avatarUrl: userInfo.avatar_url,
      isPro: userInfo.is_pro,
    },
  ) as UserInfo;

  delete adaptedUserInfo.avatar_url;
  delete adaptedUserInfo.is_pro;

  return adaptedUserInfo;
};

export const adaptCommentToClient = (review: Review): Review => {
  const adaptedReview = Object.assign(
    {},
    review,
    {
      user: {
        avatarUrl: review.user.avatar_url,
        isPro: review.user.is_pro,
      },
    },
  ) as Review;

  delete adaptedReview.user.avatar_url;
  delete adaptedReview.user.is_pro;

  return adaptedReview;
};

export const adaptCommentsToClient = (reviews: Reviews): Reviews => (
  reviews.map((review) => (
    adaptCommentToClient(review)
  ))
);

export const getRandomInteger = (min: number, max: number): number => Math.round(min - 0.5 + Math.random() * (max - min + 1));
