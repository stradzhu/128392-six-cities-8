import React from 'react';
import ReactDOM from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {Setting} from './consts';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {reducer} from './store/reducer';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        countFavorites={Setting.COUNT_FAVORITES}
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
