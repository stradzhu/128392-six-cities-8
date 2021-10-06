import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  COUNT_RENTAL_OFFERS: 789,
};

ReactDOM.render(
  <React.StrictMode>
    <App countRentalOffers={Setting.COUNT_RENTAL_OFFERS} />
  </React.StrictMode>,
  document.getElementById('root'));
