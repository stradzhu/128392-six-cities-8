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
import {OffersType} from '../../types/offer-info';
import {Reviews} from '../../types/reviews';

type AppProps = {
  countRentalOffers: number,
  countFavorites: number,
  offers: OffersType,
  reviews: Reviews
}

function App({countRentalOffers, countFavorites, offers, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Login} component={Login} />
        <Route exact path={AppRoute.Offer} render={(props) =>(<Offer authorizationStatus={AuthorizationStatus.Auth} offers={offers} reviews={reviews} {...props} />)} />
        <Route exact path={AppRoute.Main} render={() => (countRentalOffers ? <Main countRentalOffers={countRentalOffers} offers={offers} /> : <MainEmpty />)} />
        <PrivateRoute exact path={AppRoute.Favorites} render={() => countFavorites ? <Favorites offers={offers} /> : <FavoritesEmpty />} authorizationStatus={AuthorizationStatus.Auth} />
        <Route component={ErrorNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
