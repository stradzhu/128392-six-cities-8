import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {rootReducer} from './store/reducer/root-reducer';
import {setAuthorization} from './store/actions/action';
import {checkAuthAction} from './store/actions/api-actions';
import {ThunkAppDispatch} from './types/action';
import {AuthorizationStatus} from './consts';
import {redirect} from './store/middlewares/redirect';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = createAPI(() => store.dispatch(setAuthorization(AuthorizationStatus.NoAuth)));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

(store.dispatch as ThunkAppDispatch)(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
