import {getRandomInteger, getRating, getSortedOffers} from './utils';
import {makeFakeOffer} from './mocks';
import {SortTypes} from '../consts';

describe('Function: getSortedOffers', () => {
  const offerFirst = {...makeFakeOffer(), rating: 2, price: 500};
  const offerSecond = {...makeFakeOffer(), rating: 5, price: 200};
  const offerThird = {...makeFakeOffer(), rating: 3, price: 400};
  const offerFourth = {...makeFakeOffer(), rating: 4, price: 300};

  const offers = [offerFirst, offerSecond, offerThird, offerFourth];
  const offersPriceUp = [offerSecond, offerFourth, offerThird, offerFirst];
  const offersPriceDown = [offerFirst, offerThird, offerFourth, offerSecond];
  const offersRatingDown = [offerSecond, offerFourth, offerThird, offerFirst];

  it('should return sorted offers', () => {
    expect(getSortedOffers(offers, SortTypes.PriceUp))
      .toEqual(offersPriceUp);
    expect(getSortedOffers(offers, SortTypes.PriceDown))
      .toEqual(offersPriceDown);
    expect(getSortedOffers(offers, SortTypes.RatingDown))
      .toEqual(offersRatingDown);
    expect(getSortedOffers(offers, SortTypes.Popular))
      .toEqual(offers);
  });
});

describe('Function: getRating', () => {
  it('should return a normalized rating, rounded to the nearest integer', () => {
    expect(getRating(3)).toBe('60%');
    expect(getRating(3.4)).toBe('60%');
    expect(getRating(3.5)).toBe('80%');
    expect(getRating(4)).toBe('80%');
  });
});

describe('Function: getRandomInteger', () => {
  it('should return a number, which is greater or equal than -10', () => {
    expect(getRandomInteger(-10, 10)).toBeGreaterThanOrEqual(-10);
  });
  it('should return a number, which is less or equal than 10', () => {
    expect(getRandomInteger(-10, 10)).toBeLessThanOrEqual(10);
  });
});
