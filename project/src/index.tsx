import React from 'react';
import ReactDOM from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {setAuthorization} from './store/action';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';
import {ThunkAppDispatch} from './types/action';
import {AuthorizationStatus} from './consts';

const api = createAPI(  () => store.dispatch(setAuthorization(AuthorizationStatus.NoAuth)));

const composeEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument(api))));

// setTimeout чтобы лучше увидеть прелоадер :)
setTimeout(() => {
  (store.dispatch as ThunkAppDispatch)(checkAuthAction());
  (store.dispatch as ThunkAppDispatch)(fetchOffersAction());
}, 2500);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
