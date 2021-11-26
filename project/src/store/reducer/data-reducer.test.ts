import {dataReducer, initialState} from './data-reducer';
import {loadFavorites, loadNearOffers, loadOfferById, loadOfferComments, loadOffers, setFavorite, setFavoriteInOffer} from '../actions/action';
import {makeFakeComment, makeFakeOffer} from '../../utils/mocks';

describe('Reducer: mainReducer', () => {
  it('should set favorite in offers', () => {
    const stateWithOffers = {
      ...initialState, offers: [
        {...makeFakeOffer(), id: 1, isFavorite: false},
        {...makeFakeOffer(), id: 2, isFavorite: false},
        {...makeFakeOffer(), id: 3, isFavorite: false},
      ],
    };
    const stateWithOffersWhenOneOfferIsFavorite = JSON.parse(JSON.stringify(stateWithOffers));
    stateWithOffersWhenOneOfferIsFavorite.offers[1].isFavorite = true;
    expect(dataReducer(stateWithOffers, setFavorite(2, true)))
      .toEqual(stateWithOffersWhenOneOfferIsFavorite);
  });

  it('should not set favorite in offers', () => {
    const stateWithOffers = {
      ...initialState, offers: [
        {...makeFakeOffer(), id: 1, isFavorite: false},
        {...makeFakeOffer(), id: 2, isFavorite: false},
        {...makeFakeOffer(), id: 3, isFavorite: false},
      ],
    };
    expect(dataReducer(stateWithOffers, setFavorite(99, true)))
      .toEqual(stateWithOffers);
  });

  it('should set favorite in offer', () => {
    const stateWithOffer = {...initialState, offer: {...makeFakeOffer(), id: 2, isFavorite: false}};
    expect(dataReducer(stateWithOffer, setFavoriteInOffer(2, true)))
      .toEqual({...stateWithOffer, offer: {...stateWithOffer.offer, isFavorite: true}});
  });

  it('should not set favorite in offer', () => {
    const stateWithOffer = {...initialState, offer: {...makeFakeOffer(), id: 2, isFavorite: false}};
    expect(dataReducer(stateWithOffer, setFavoriteInOffer(99, true)))
      .toEqual(stateWithOffer);
  });

  it('should load offers', () => {
    const offers = [makeFakeOffer(), makeFakeOffer(), makeFakeOffer()];
    expect(dataReducer(initialState, loadOffers(offers)))
      .toEqual({...initialState, offers});
  });

  it('should load favorites', () => {
    const favorites = [makeFakeOffer(), makeFakeOffer(), makeFakeOffer()];
    expect(dataReducer(initialState, loadFavorites(favorites)))
      .toEqual({...initialState, favorites});
  });

  it('should load comments', () => {
    const reviews = [makeFakeComment(), makeFakeComment(), makeFakeComment()];
    expect(dataReducer(initialState, loadOfferComments(reviews)))
      .toEqual({...initialState, reviews});
  });

  it('should load offer by id', () => {
    const offer = makeFakeOffer();
    expect(dataReducer(initialState, loadOfferById(offer)))
      .toEqual({...initialState, offer});
  });

  it('should load near offers', () => {
    const nearOffers = [makeFakeOffer(), makeFakeOffer(), makeFakeOffer()];
    expect(dataReducer(initialState, loadNearOffers(nearOffers)))
      .toEqual({...initialState, nearOffers});
  });

  it('on an unknown actions should return initial state', () => {
    expect(dataReducer(initialState, {type: 'UNKNOWN_ACTION', payload: 'lorem ipsum'}))
      .toEqual(initialState);
  });
});
