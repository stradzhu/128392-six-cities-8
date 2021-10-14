import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Setting} from './consts';

ReactDOM.render(
  <React.StrictMode>
    <App countRentalOffers={Setting.COUNT_RENTAL_OFFERS} countFavorites={Setting.COUNT_FAVORITES}/>
  </React.StrictMode>,
  document.getElementById('root'));
