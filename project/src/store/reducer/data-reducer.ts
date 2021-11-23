import {DataState} from '../../types/state';
import {createReducer} from '@reduxjs/toolkit';
import {setFavorite, setFavoriteNearOffers, setFavoriteInOffer, loadOffers, loadFavorites, loadOfferComments, loadOfferById, loadNearOffers} from '../actions/action';

const initialState: DataState = {
  offers: [],
  offer: null,
  favorites: [],
  nearOffers: [],
  reviews: [],
};

export const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavorite, (state: DataState, action) => {
      state.offers = state.offers.map((offer) => {
        if (offer.id === action.payload.id) {
          offer.isFavorite = action.payload.status;
          return offer;
        }
        return offer;
      });
    })
    .addCase(setFavoriteNearOffers, (state: DataState, action) => {
      state.nearOffers = state.nearOffers.map((offer) => {
        if (offer.id === action.payload.id) {
          offer.isFavorite = action.payload.status;
          return offer;
        }
        return offer;
      });
    })
    .addCase(setFavoriteInOffer, (state: DataState, action) => {
      if (state.offer && state.offer.id === action.payload.id) {
        state.offer.isFavorite = action.payload.status;
      }
    })
    .addCase(loadOffers, (state: DataState, action) => {
      state.offers = action.payload;
    })
    .addCase(loadFavorites, (state: DataState, action) => {
      state.favorites = action.payload;
    })
    .addCase(loadOfferComments, (state: DataState, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadOfferById, (state: DataState, action) => {
      state.offer = action.payload;
    })
    .addCase(loadNearOffers, (state: DataState, action) => {
      state.nearOffers = action.payload;
    });
});
