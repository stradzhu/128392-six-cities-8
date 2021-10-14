import {AppRoute, AuthorizationStatus} from '../../consts';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Login from '../login/login';
import MainEmpty from '../main-empty/main-empty';
import Offer from '../offer/offer';
import ErrorNotFound from '../error-not-found/error-not-found';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  countRentalOffers: number,
  countFavorites: number
}

function App({countRentalOffers, countFavorites}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Login} component={Login} />
        <Route exact path={AppRoute.Offer} render={() =>(<Offer authorizationStatus={AuthorizationStatus.NoAuth} />)} />
        <Route exact path={AppRoute.Main} render={() => (countRentalOffers ? <Main countRentalOffers={countRentalOffers} /> : <MainEmpty />)} />
        <PrivateRoute exact path={AppRoute.Favorites} render={() => countFavorites ? <Favorites /> : <FavoritesEmpty />} authorizationStatus={AuthorizationStatus.NoAuth} />
        <Route component={ErrorNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
