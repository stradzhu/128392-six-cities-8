import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Setting} from './consts';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      countRentalOffers={Setting.COUNT_RENTAL_OFFERS}
      countFavorites={Setting.COUNT_FAVORITES}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
